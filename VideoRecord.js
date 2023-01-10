import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

import { useIsFocused } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import * as VideoThumbnails from "expo-video-thumbnails";

export default function Recorder() {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);
  const [camera, setCamera] = useState(null);
  const [recordingUri, setRecordingUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [galleryItems, setGalleryItems] = useState([]);
  const video = useRef(null);
  const [vidStatus, setVidStatus] = useState({});
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == "granted");

      if (galleryStatus.status == "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["video"],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      try {
        const videoRecord = await camera.recordAsync({
          maxDuration: 10,
        });
        if (videoRecord) {
          const data = await videoRecord;
          const source = data.uri;
          let sourceThumb = await generateThumbnail(source);
          navigation.navigate("Post", { source, sourceThumb });
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideo = async () => {
    if (camera) {
      camera.stopRecording();
    }
  };

  const pickFromCameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      let sourceThumb = await generateThumbnail(result.assets[0].uri);
      navigation.navigate("Post", {
        source: result.assets[0].uri,
        sourceThumb,
      });
    }
  };

  const generateThumbnail = async (source) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(source, {
        time: 2000,
      });
      return uri;
    } catch (e) {
      console.warn(e);
    }
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.cameraContainer}>
      {isFocused ? (
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          type={type}
          ratio={"16:9"}
          flashMode={flash}
        />
      ) : null}
      <View style={styles.sideContainer}>
        <TouchableOpacity
          style={styles.sideButtons}
          onPress={() =>
            setFlash(
              flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            )
          }
        >
          <Feather name="zap" size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sideButtons}
          onPress={() =>
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Feather name="refresh-ccw" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.recordContainer}>
          <TouchableOpacity
            onLongPress={() => takeVideo()}
            onPressOut={() => stopVideo()}
            style={styles.recordButton}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => pickFromCameraRoll()}
            style={styles.galleryButton}
          >
            {galleryItems[0] == undefined ? (
              <></>
            ) : (
              <Image
                style={styles.galleryButtonImage}
                source={{ uri: galleryItems[0].uri }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    // flex: 1,
    flexDirection: "row",
  },
  camera: {
    flex: 1,
    aspectRatio: 9 / 16,
    backgroundColor: "black",
  },
  sideContainer: {
    right: 0,
    marginHorizontal: 20,
    position: "absolute",
    top: 50,
  },
  bottomButtons: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginBottom: 30,
    width: "100%",
  },
  recordContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  recordButton: {
    borderWidth: 10,
    borderColor: "#ff6060",
    backgroundColor: "#ff4040",
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
  sideButtons: {
    alignItems: "center",
    marginBottom: 35,
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  galleryButtonImage: {
    width: 50,
    height: 50,
  },
});

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
import { useCreateAsset } from "@livepeer/react-native";
import { useIsFocused } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

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

  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video ? { sources: [{ name: "demo", file: recordingUri }] } : null
  );

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 10,
      });
      setRecordingUri(data.uri);
      //console.log(data.uri);
    }
  };

  const stopVideo = async () => {
    camera.stopRecording();
  };

  const postVideo = async (uri) => {
    console.log(uri);
    createAsset?.();
  };

  const pickFromCameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
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
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Feather name="refresh-ccw" size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sideBarButtons}
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
      </View>
      <View style={styles.bottomButtons}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.recordContainer}>
          <TouchableOpacity
            onLongPress={() => recordVideo()}
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
    top: 60,
  },
  bottomButtons: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    marginBottom: 30,
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
    marginBottom: 25,
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

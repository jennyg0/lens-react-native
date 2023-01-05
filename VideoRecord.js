import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

export default function Recorder() {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [recordingUri, setRecordingUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
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
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"16:9"}
        />
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: recordingUri,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Pressable
          style={styles.pressable}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Text style={styles.text}>{status.isPlaying ? "Pause" : "Play"}</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={styles.text}>Flip</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={() => takeVideo()}>
          <Text style={styles.text}>Start</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={() => stopVideo()}>
          <Text style={styles.text}>Stop</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => postVideo(recordingUri)}
        >
          <Text style={styles.text}>Post</Text>
        </Pressable>
        <Pressable
          style={styles.pressableUpload}
          onPress={() => navigation.navigate("Upload")}
        >
          <Text style={styles.textUpload}>Upload</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    //flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  video: {
    alignSelf: "center",
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: "row",
    //justifyContent: "space-around",
    // alignItems: "center",
  },
  pressable: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  pressableUpload: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    border: "black",
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textUpload: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  mainContainer: {
    //flex: 2,
    display: "flex",
    justifyContent: "space-between",
  },
});

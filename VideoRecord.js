import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
        <Button
          title="Flip"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        ></Button>
        <Button title="Start" onPress={() => takeVideo()} />
        <Button title="Stop" onPress={() => stopVideo()} />
        <Button title="Post" onPress={() => postVideo(recordingUri)} />
        <Button title="Upload" onPress={() => navigation.navigate("Upload")} />
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
    justifyContent: "center",
    // alignItems: "center",
  },
  mainContainer: {
    //flex: 2,
    display: "flex",
    justifyContent: "space-between",
  },
});

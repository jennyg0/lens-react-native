import React, { useState } from "react";
import VideoUpload from "./VideoUpload";
import { useCreateAsset } from "@livepeer/react-native";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Input,
  View,
} from "react-native";

export default function PostVideo() {
  const [video, setVideo] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState();
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video ? { sources: [{ name: title, file: video }] } : null
  );

  const onVideoChange = (result) => {
    setVideo(result);
    console.log(video);
  };

  const onSubmit = async () => {
    createAsset?.();
  };

  return (
    <SafeAreaView>
      <VideoUpload onChange={onVideoChange} />
      <Pressable style={styles.pressable} onPress={() => onSubmit()}>
        <Text style={styles.text}>Upload</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressable: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

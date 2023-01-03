import React, { useState } from "react";
import VideoUpload from "./VideoUpload";
import { useCreateAsset } from "@livepeer/react-native";
import {
  Button,
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
      <Button title="upload" onPress={() => onSubmit()} />
    </SafeAreaView>
  );
}

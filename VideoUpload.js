import React, { useState } from "react";
import VideoPicker from "./VideoPicker";
import VideoRecord from "./VideoRecord";
// import Input from "../../components/shared/Input";
// import Button from "../../components/shared/Button";
import * as ImagePicker from "expo-image-picker";
import { useCreateAsset } from "@livepeer/react-native";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Input,
  View,
} from "react-native";

export default function VideoUpload() {
  const [media, setMedia] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState();
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset({ sources: [{ name: title, file: media?.uri }] });

  const onMediaChange = (result) => {
    setMedia(result);
  };

  const onSubmit = async () => {
    createAsset?.();
  };

  return (
    <SafeAreaView>
      {/* <VideoPicker onChange={onMediaChange} />
      <Button title="upload" onPress={onSubmit} /> */}
      <VideoRecord />
    </SafeAreaView>
  );
}

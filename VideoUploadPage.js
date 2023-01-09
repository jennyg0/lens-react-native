import React, { useState, useMemo } from "react";
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
//const IPFS = require("ipfs-api");

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
    video
      ? { sources: [{ name: title, file: video?.assets[0].assetId }] }
      : null
  );

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === "failed"
        ? "Failed to process video."
        : progress?.[0].phase === "waiting"
        ? "Waiting"
        : progress?.[0].phase === "uploading"
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === "processing"
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress]
  );

  const onVideoChange = (result) => {
    setVideo(result);
  };

  const onSubmit = async () => {
    //console.log(video?.uri);
    console.log("hiiiiiii", video?.assets[0].fileName);
    //handleUpload();
    createAsset?.();
  };

  // const handleUpload = async () => {
  //   const ipfs = new IPFS({
  //     host: "ipfs.infura.io",
  //     port: 5001,
  //     protocol: "https",
  //   });
  //   const file = {
  //     path: video.uri,
  //     content: video.uri,
  //   };
  //   const options = {
  //     wrapWithDirectory: true,
  //     progress: (prog) => console.log(`received: ${prog}`),
  //   };

  //   const uploaded = await ipfs.add(file, options);
  //   console.log(uploaded);
  // };

  return (
    <SafeAreaView>
      <VideoUpload onChange={onVideoChange} />
      {progressFormatted && <Text>{progressFormatted}</Text>}
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

import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";

export default function UploadVideo({ onChange }) {
  const [video, setVideo] = useState();

  const pickVideo = async () => {
    if (!video) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        onChange(result);
        setVideo(result);
      }
    }
  };

  return (
    <Pressable onPress={pickVideo} style={styles.container}>
      {video?.uri ? (
        <Video
          source={{ uri: video?.uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          shouldPlay
          useNativeControls={true}
          isLooping
          style={styles.video}
        />
      ) : (
        <Text style={styles.text}>Select a video to upload</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#333",
    borderWidth: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
  },
  video: {
    width: "95%",
    height: "95%",
    borderRadius: 10,
  },
});

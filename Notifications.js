import React from "react";
import { Button, StyleSheet } from "react-native";
import LinearGradient from "expo-linear-gradient";

export default function NotificationComponent() {
  return (
    <>
      {/* <LinearGradient
        colors={["red", "yellow", "green"]}
        style={styles.linearGradient}
        start={{ x: 0.7, y: 0 }}
      >
        <Button title="hi"></Button>
      </LinearGradient> */}

      {/* <Text> User liked your video! </Text>
      <Text>User commented on your video</Text> */}
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});

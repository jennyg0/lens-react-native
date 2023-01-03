import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function NotificationComponent() {
  return (
    <SafeAreaView>
      <Text> User liked your video! </Text>
      <Text>User commented on your video</Text>
    </SafeAreaView>
  );
}

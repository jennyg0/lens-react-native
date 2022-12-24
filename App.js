import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function App() {
  return <Profiles />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

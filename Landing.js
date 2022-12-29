import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function LandingComponent() {
  return (
    <SafeAreaView>
      <Text> 🥵</Text>
      <Text>TAKES</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <Button title="Login" color="#841584" accessibilityLabel="Login" />
      <Button
        title="Signup"
        color="#841584"
        accessibilityLabel="Signup"
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

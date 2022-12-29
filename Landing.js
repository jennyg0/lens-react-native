import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

export default function LandingComponent() {
  const onPressLogin = () => console.log("hello");
  const onPressSignup = () => console.log("hello");
  return (
    <SafeAreaView>
      <Text style={styles.header}> 🥵 takes</Text>
      <Pressable style={styles.button} onPress={onPressLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressSignup}>
        <Text style={styles.text}>Signup</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    margin: "auto",
    fontSize: 30,
    lineHeight: 40,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    width: "30%",
    margin: "auto",
    marginTop: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

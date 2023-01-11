import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

export default function LandingComponent() {
  const onPressLogin = () => console.log("hello");
  const onPressCreate = () => console.log("hello");
  return (
    <View>
      <Text style={styles.header}> atm </Text>
      <Text style={styles.subheading}> share your moments </Text>
      {/* <Pressable style={styles.button} onPress={onPressLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressSignup}>
        <Text style={styles.text}>Signup</Text>
      </Pressable> */}
      <Pressable style={styles.button} onPress={onPressCreate}>
        <Text style={styles.text}>Create a Moment</Text>
      </Pressable>
    </View>
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
  subheading: {
    height: 20,
    margin: "auto",
    fontSize: 15,
    lineHeight: 20,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "purple",
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

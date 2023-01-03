import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { ProfileHeader } from "@lens-protocol/react-native-lens-ui-kit";

export default function CurrentProfileComponent() {
  const profile = "0x6039";

  return (
    <SafeAreaView>
      <ProfileHeader profileId={profile} styles={baseStyles} />
      {/* <Text style={styles.text}>"busy 👩‍💻"</Text>
      <Pressable>Update Status</Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 3,
  },
});

const baseStyles = StyleSheet.create({
  container: {},
  blankHeader: {
    height: 120,
    backgroundColor: "black",
  },
  headerImage: {
    width: "10%",
    height: 120,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    marginLeft: 25,
  },
  userDetails: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
  },
  handle: {
    fontSize: 14,
  },
  bio: {
    marginTop: 10,
    color: "rgba(0, 0, 0, .5)",
  },
  profileStats: {
    flexDirection: "row",
    marginTop: 15,
  },
  statsData: {
    fontWeight: "600",
    fontSize: 16,
  },
  statsHeader: {
    marginLeft: 3,
    opacity: 0.7,
  },
  profileFollowingData: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileFollowerData: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});

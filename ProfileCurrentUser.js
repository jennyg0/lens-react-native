import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProfileHeader } from "@lens-protocol/react-native-lens-ui-kit";
import { Player } from "@livepeer/react-native";

export default function CurrentProfileComponent() {
  const profile = "0x6039";
  const currentMoment = "12c0q69ljo73ofut/index.m3u8";
  //const src ="https://ipfs.livepeer.studio/ipfs/QmURv3J5BGsz23GaCUm7oXncm2M9SCj8RQDuFPGzAFSJw8"
  const janVids = [
    "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
    "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
    "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
    "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
  ];
  return (
    <>
      <ProfileHeader profileId={profile} styles={baseStyles} />
      {/* <Text style={styles.text}>"busy 👩‍💻"</Text>
      <Pressable>Update Status</Pressable> */}
      <Text style={styles.monthHeaders}>Jan 2023</Text>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        {janVids.map((source) => {
          return (
            <View style={styles.circles}>
              <Player
                title="current moment"
                showTitle={false}
                //playbackId={currentMoment}
                src={source}
                loop
                theme={{
                  radii: { containerBorderRadius: "50%" },
                }}
                aspectRatio="4to3"
              />
            </View>
          );
        })}
      </View>
      <Text style={styles.monthHeaders}>Dec 2022</Text>
      {/* <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        {janVids.map((source) => {
          return (
            <View style={styles.circles}>
              <Player
                title="current moment"
                showTitle={false}
                //playbackId={currentMoment}
                src={source}
                loop
                theme={{
                  radii: { containerBorderRadius: "50%" },
                }}
                aspectRatio="4to3"
              />
            </View>
          );
        })}
      </View> */}
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        {/* {janVids.map((source) => {
          return (
            <View style={styles.circles}>
              <Player
                title="current moment"
                showTitle={false}
                //playbackId={currentMoment}
                src={source}
                loop
                theme={{
                  radii: { containerBorderRadius: "50%" },
                }}
                aspectRatio="4to3"
              />
            </View>
          );
        })} */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 3,
  },
  playerView: {
    // flexDirection: "row",
    // borderRadius: "50%",
    //width: 3,
    backgroundColor: "black",
  },
  circles: {
    backgroundColor: "blue",
    flex: 0.73,
    borderRadius: "50%",
    marginHorizontal: 11,
  },
  monthHeaders: {
    paddingLeft: 25,
  },
});

const baseStyles = StyleSheet.create({
  container: {},
  blankHeader: {
    height: 120,
    backgroundColor: "green",
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

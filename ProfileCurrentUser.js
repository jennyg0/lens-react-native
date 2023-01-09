import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { ProfileHeader } from "@lens-protocol/react-native-lens-ui-kit";
import { Player } from "@livepeer/react-native";
import { Feather } from "@expo/vector-icons";
import img from "./greenery.jpeg";

export default function CurrentProfileComponent({ navigation }) {
  const profile = "0x6039";
  const currentMoment = "12c0q69ljo73ofut/index.m3u8";
  //const src ="https://ipfs.livepeer.studio/ipfs/QmURv3J5BGsz23GaCUm7oXncm2M9SCj8RQDuFPGzAFSJw8"
  const janVids = [
    {
      uri: "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
      image: img,
    },
    {
      uri: "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
      image: img,
    },
    {
      uri: "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
      image: img,
    },
    {
      uri: "https://lp-playback.com/hls/12c0q69ljo73ofut/index.m3u8",
      image: img,
    },
  ];

  const playVideo = (source) => {
    navigation.navigate("Player", { source });
  };

  return (
    <>
      <ProfileHeader profileId={profile} styles={baseStyles} />
      {/* <Text style={styles.text}>"busy 👩‍💻"</Text>
      <Pressable>Update Status</Pressable> */}
      <View style={styles.container}>
        <Text style={styles.monthHeaders}>Jan 2023</Text>
        <View style={styles.circleContainer}>
          {janVids.map((elem, i) => {
            return (
              <Pressable key={i} onPress={() => playVideo(elem.uri)}>
                <Image style={styles.circles} source={elem.image} size={2} />
              </Pressable>
            );
          })}
        </View>
        <Text style={styles.monthHeaders}>Dec 2022</Text>
        <View style={styles.circleContainer}>
          {janVids.map((elem, i) => {
            return (
              <Pressable key={i} onPress={() => playVideo(elem.uri)}>
                <Image style={styles.circles} source={elem.image} size={2} />
              </Pressable>
            );
          })}
        </View>
        <View style={styles.circleContainer}>
          {janVids.map((elem, i) => {
            return (
              <Pressable key={i} onPress={() => playVideo(elem.uri)}>
                <Image style={styles.circles} source={elem.image} size={2} />
              </Pressable>
            );
          })}
        </View>
        <View style={styles.circleContainer}>
          {janVids.map((elem, i) => {
            return (
              <Pressable key={i} onPress={() => playVideo(elem.uri)}>
                <Image style={styles.circles} source={elem.image} size={2} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
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
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
    paddingHorizontal: 20,
  },
  circles: {
    flex: 0.73,
    borderRadius: "50%",
    marginHorizontal: 11,
    width: 60,
  },
  monthHeaders: {
    paddingLeft: 25,
    paddingBottom: 20,
    fontWeight: "bold",
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

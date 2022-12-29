import { Feed } from "@lens-protocol/react-native-lens-ui-kit";

export default function FeedComponent({ navigation }) {
  return (
    <Feed
      onProfileImagePress={(profile) => {
        let data = profile.profile;
        console.log(data, data.id);
        navigation.navigate("Profile", { data });
      }}
    />
  );
}

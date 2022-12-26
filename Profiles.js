import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";

const ProfileComponent = ({ navigation }) => {
  return (
    <>
      <Profiles
        onProfilePress={(profile) =>
          navigation.navigate("Profile", { profile })
        }
        onFollowPress={(profile) => console.log(profile)}
      />
    </>
  );
};

export default ProfileComponent;

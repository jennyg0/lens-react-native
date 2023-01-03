import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function ViewProfile({ route, navigation }) {
  console.log(route.params.profile, "here");
  return (
    <Profile
      profile={route.params.profile}
      onFollowingPress={(profile) => {
        //console.log("PROFILE:::: ", profile);
        navigation.push("Following", {
          ethereumAddress: profile.ownedBy,
        });
      }}
      onProfileImagePress={(publication) => {
        navigation.push("Profile", {
          profile: publication.profile,
        });
      }}
      onCommentPress={(publication) => {
        const publicationId = publication.mirrorOf
          ? publication.mirrorOf.id
          : publication.id;
        navigation.push("Comments", {
          publicationId,
        });
      }}
    />
  );
}

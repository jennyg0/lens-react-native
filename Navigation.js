import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingComponent from "./Landing";
import FeedComponent from "./Feed";
import ProfileComponent from "./Profiles";
import ViewProfile from "./ViewProfile";
import CurrentProfileComponent from "./ProfileCurrentUser";
import ViewComments from "./ViewComments";
import ViewFollowing from "./ViewFollowing";
import ViewFollowers from "./ViewFollowers";
import NotificationComponent from "./Notifications";
import CreatePollComponent from "./CreatePoll";
import VoteOnPollComponent from "./VoteOnPoll";
import PostVideo from "./VideoPost";
import PlayerComponent from "./Player";
import UploadVideoPage from "./VideoUploadPage";
import SaveVideoComponent from "./SaveVideo";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View, Header } from "react-native";

const Stack = createNativeStackNavigator();

const GradientHeader = (props) => (
  <View style={{ backgroundColor: "#eee" }}>
    <LinearGradient
      colors={["#00a8c3", "#00373f"]}
      style={[StyleSheet.absoluteFill, styles.linearGradient]}
    />
  </View>
);

// const MainStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Landing"
//         options={{ headerShown: false }}
//         component={LandingComponent}
//       />
//       <Stack.Screen name="Feed" component={FeedComponent} />
//     </Stack.Navigator>
//   );
// };

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={NotificationComponent}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          // headerStyle: {
          //   //header: (props) => <GradientHeader {...props} />,

          //     height: 68,
          //     backgroundColor: "transparent",
          //     color: "white",
          //   },
          // backgroundColor:
          //   "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)",
          //},
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Moments" component={CurrentProfileComponent} />
      <Stack.Screen name="Player" component={PlayerComponent} />
    </Stack.Navigator>
  );
};

const UploadStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Record" component={PostVideo} />
      <Stack.Screen name="Upload" component={UploadVideoPage} />
      <Stack.Screen name="Post" component={SaveVideoComponent} />
    </Stack.Navigator>
  );
};

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Feed" component={FeedComponent} />
      <Stack.Screen name="Profile" component={ViewProfile} />
      <Stack.Screen name="Comments" component={ViewComments} />
      <Stack.Screen name="Following" component={ViewFollowing} />
      <Stack.Screen name="Followers" component={ViewFollowers} />
    </Stack.Navigator>
  );
};

export {
  FeedStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
  UploadStackNavigator,
};

/* <Stack.Navigator>
  <Stack.Screen name="Home" component={CreatePollComponent} />
          <Stack.Screen name="Vote" component={VoteOnPollComponent} />
  <Stack.Screen
              name="Landing"
              options={{ headerShown: false }}
              component={LandingComponent}
            />
  <Stack.Screen name="Feed" component={FeedComponent} />
  <Stack.Screen name="Home" component={ProfileComponent} />
  <Stack.Screen name="Profile" component={ViewProfile} />
  <Stack.Screen name="Comments" component={ViewComments} />
  <Stack.Screen name="Following" component={ViewFollowing} />
  <Stack.Screen name="Followers" component={ViewFollowers} />
</Stack.Navigator>; */

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingComponent from "./Landing";
import FeedComponent from "./Feed";
import ProfileComponent from "./Profiles";
import ViewProfile from "./ViewProfile";
import ViewComments from "./ViewComments";
import ViewFollowing from "./ViewFollowing";
import ViewFollowers from "./ViewFollowers";
import CreatePollComponent from "./CreatePoll";
import VoteOnPollComponent from "./VoteOnPoll";

const Stack = createNativeStackNavigator();

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

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProfileComponent} />
      <Stack.Screen name="Profile" component={ViewProfile} />
      <Stack.Screen name="Comments" component={ViewComments} />
      <Stack.Screen name="Following" component={ViewFollowing} />
      <Stack.Screen name="Followers" component={ViewFollowers} />
    </Stack.Navigator>
  );
};

export { ProfileStackNavigator };

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

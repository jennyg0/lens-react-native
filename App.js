import { StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit";

import ProfileComponent from "./Profiles";
import ViewProfile from "./ViewProfile";
import ViewComments from "./ViewComments";
import ViewFollowing from "./ViewFollowing";
import CreatePollComponent from "./CreatePoll";
import VoteOnPollComponent from "./VoteOnPoll";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LensProvider environment="testnet">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CreatePollComponent} />
          <Stack.Screen name="Vote" component={VoteOnPollComponent} />
          {/* <Stack.Screen name="Home" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ViewProfile} />
          <Stack.Screen name="Comments" component={ViewComments} />
          <Stack.Screen name="Following" component={ViewFollowing} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

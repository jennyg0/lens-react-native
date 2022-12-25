import { StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit";

import ProfileComponent from "./Profiles";
import ViewProfile from "./ViewProfile";
import ViewComments from "./ViewComments";
import ViewFollowing from "./ViewFollowing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LensProvider theme="dark" environment="testnet">
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProfileComponent} />
          <Stack.Screen name="ViewProfile" component={ViewProfile} />
          <Stack.Screen name="ViewComments" component={ViewComments} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
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

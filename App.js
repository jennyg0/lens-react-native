import { StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit";
import BottomNav from "./BottomNav";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react-native";

const client = createReactClient({
  provider: studioProvider({ apiKey }),
});

export default function App() {
  return (
    <LensProvider environment="testnet">
      <LivepeerConfig client={client}>
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
      </LivepeerConfig>
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

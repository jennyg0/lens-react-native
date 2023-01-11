import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit";
import BottomNav from "./BottomNav";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react-native";

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.API_KEY_PUBLIC_STUDIO }),
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

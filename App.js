import { StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit";
import { LivepeerProvider } from "./Livepeer";
import BottomNav from "./BottomNav";

export default function App() {
  return (
    <LensProvider environment="testnet">
      <NavigationContainer>
        <BottomNav />
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

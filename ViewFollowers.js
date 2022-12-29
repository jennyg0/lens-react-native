import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";

export default function ViewFollowers({ route }) {
  return (
    <Profiles
      query={{
        name: "doesFollow",
        ethereumAddress: route.params.ethereumAddress,
      }}
    />
  );
}

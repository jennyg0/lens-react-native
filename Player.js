import { Player } from "@livepeer/react-native";

export default function PlayerComponent({ route }) {
  const source = route.params.source;

  return (
    <Player
      title="current moment"
      showTitle={false}
      src={source}
      loop
      aspectRatio="4to3"
    />
  );
}

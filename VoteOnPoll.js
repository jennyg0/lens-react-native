import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function VoteOnPollComponent({ route, navigation }) {
  const [optionOneCount, setOptionOneCount] = useState(0);
  const [optionTwoCount, setOptionTwoCount] = useState(0);
  const { name, optionOne, optionTwo } = route.params;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <Button
        onPress={() =>
          setOptionOneCount((optionOneCount) => optionOneCount + 1)
        }
        title={optionOne}
        color="#841584"
        //accessibilityLabel={`Vote for ${Option1}`}
      ></Button>
      <Text>Votes: {optionOneCount}</Text>
      <Button
        onPress={() =>
          setOptionTwoCount((optionTwoCount) => optionTwoCount + 1)
        }
        title={optionTwo}
        color="#841584"
        //accessibilityLabel={`Vote for ${Option2}`}
      ></Button>
      <Text>Votes: {optionTwoCount}</Text>
    </SafeAreaView>
  );
}

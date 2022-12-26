import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const CreatePollComponent = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [textOption1, onChangeTextOption1] = useState("");
  const [textOption2, onChangeTextOption2] = useState("");

  // const onPressCreatePoll = () => {
  //   navigation.navigate("Vote");
  // };

  return (
    <SafeAreaView>
      <Text>Create a Poll</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="name of poll"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextOption1}
        value={textOption1}
        placeholder="option 1"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextOption2}
        value={textOption2}
        placeholder="option 2"
      />
      <Button
        onPress={() =>
          navigation.navigate("Vote", {
            name: text,
            optionOne: textOption1,
            optionTwo: textOption2,
          })
        }
        title="Create"
        color="#841584"
        accessibilityLabel="Create a poll with this button"
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreatePollComponent;

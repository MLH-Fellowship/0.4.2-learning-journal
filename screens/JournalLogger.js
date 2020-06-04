import React, { useState } from "react";
import Color from "../constants/Colors";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default function JournalLogger({ navigation, callback }) {
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");

  const submitHandler = () => {
    callback(titleText, descText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 16, padding: 5, color: "white" }}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Add Entry</Text>
      <KeyboardAvoidingView style={{ flex: 0.9 }} behavior="padding">
        <TouchableWithoutFeedback
          style={styles.filler}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.filler}>
            <View style={styles.imagePicker}>
              <Text style={styles.imagePickerText}>Select an Image!</Text>
            </View>
            <TextInput
              value={titleText}
              style={styles.textInput}
              placeholder="Enter a title!"
              placeholderTextColor={Color.purple}
              onChange={(e) => setTitleText(e.target.value)}
            />
            <TextInput
              value={descText}
              placeholder="A few more details, maybe?"
              placeholderTextColor={Color.purple}
              multiline
              style={[
                styles.textInput,
                {
                  height: 100,
                  textAlignVertical: "top",
                  overflow: "scroll",
                },
              ]}
              onChange={(e) => setDescText(e.target.value)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.button} onPress={submitHandler}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  filler: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  headerText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 30,
  },

  imagePicker: {
    width: "90%",
    height: "30%",
    borderColor: Color.purple,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  imagePickerText: {
    fontSize: 18,
    color: Color.purple,
  },

  textInput: {
    marginTop: 30,
    height: 60,
    width: "90%",
    backgroundColor: Color.lightPurple,
    textAlign: "center",
    color: Color.purple,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    fontSize: 18,
    borderRadius: 20,
  },

  button: {
    alignSelf: "center",
    backgroundColor: Color.purple,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
  },

  cancelButton: {
    width: "30%",
    margin: 10,
    alignItems: "center",
    backgroundColor: Color.newkRed,
    alignSelf: "flex-end",
    borderRadius: 8,
  },
});

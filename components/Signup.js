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

const log = (type) => console.log.bind(console, type);

export default function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {};
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Signup</Text>
        <KeyboardAvoidingView style={{ flex: 0.9 }} behavior="padding">
          <TouchableWithoutFeedback style={styles.filler} onPress={Keyboard.dismiss}>
            <View style={styles.filler}>
              <TextInput
                value={userName}
                style={styles.textInput}
                placeholder="johndoe"
                placeholderTextColor={Color.purple}
                onChange={(e) => setuserName(e.target.value)}
              />
              <TextInput
                secureTextEntry
                autoCorrect={false}
                password={true}
                value={password}
                placeholder="Password"
                placeholderTextColor={Color.purple}
                style={styles.textInput}
                onChange={(e) => setpassword(e.target.value)}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
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

  textInput: {
    marginTop: 30,
    height: 60,
    width: "90%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: Color.lightPurple,
    color: Color.purple,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
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
});

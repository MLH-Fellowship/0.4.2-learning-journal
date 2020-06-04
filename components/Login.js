import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Form from "@rjsf/core";

const schema = {
  title: "Login",
  type: "object",
  required: ["title"],
  properties: {
    username: { type: "string", title: "Username", default: "johndoe" },
    password: { type: "string", title: "Password" },
  },
};

const uiSchema = {
  username: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "family-name",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
};

const formData = {
  username: "johndoe",
  password: "",
};

const log = (type) => console.log.bind(console, type);

export default function Login() {
  return (
    <View style={styles.container}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

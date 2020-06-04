import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import Color from "../../constants/Colors";

export default function ({ style, size, callback }) {
  return (
    <TouchableOpacity
      style={[{ ...style }, styles.buttonStyle]}
      onPress={callback}
    >
      <MaterialIcons name="add" size={size || 30} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Color.darkPurple,
    alignItems: "center",
    justifyContent: "center",
  },
});

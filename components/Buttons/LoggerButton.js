import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import Color from "../../constants/Colors";

export default function ({ style, size }) {
  return (
    <TouchableOpacity style={[{ ...style }, styles.buttonStyle]}>
      <MaterialIcons name="add" size={size || 24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.darkPurple,
  },
});

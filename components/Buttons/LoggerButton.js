import React, { Fragment } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Color from "../../constants/Colors";

const BUTTON_DIMENSION = 60;

export default function ({ style, size, callback, heatmapCallback }) {
  return (
    <View>
      <TouchableOpacity
        style={[
          { ...style, marginBottom: BUTTON_DIMENSION + 5 },
          styles.buttonStyle,
        ]}
        onPress={heatmapCallback}
      >
        <Ionicons name="md-flame" size={size || 30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[{ ...style }, styles.buttonStyle]}
        onPress={callback}
      >
        <MaterialIcons name="add" size={size || 30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: BUTTON_DIMENSION,
    height: BUTTON_DIMENSION,
    borderRadius: BUTTON_DIMENSION / 2,
    backgroundColor: Color.darkPurple,
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import JournalPost from "./JournalPost";
import JournalPost2 from "./JournalPost2";

export default function JournalList() {
  return (
        <ScrollView style={styles.container}>
        <JournalPost />
        <JournalPost2 />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    padding: "1.5rem",
    flex: 1
  },
});

import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ArticlePost from "./ArticlePost";
import ArticlePost2 from "./ArticlePost2";

export default function ArticleList() {
  return (
        <ScrollView style={styles.container}>
        <ArticlePost />
        <ArticlePost2 />
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

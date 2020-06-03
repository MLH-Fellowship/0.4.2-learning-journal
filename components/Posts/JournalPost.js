import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

import BG from "../../assets/images/bg.png";

export default function JournalPost({ post }) {
  const date = dateFormatter(post.date);
  return (
    <View style={styles.container}>
      <View style={styles.containerOut}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.PostContainer}>
          <View style={styles.postMeta}>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const dateFormatter = (raw_date) => {
  const date = new Date(raw_date);
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })}, ${date.getFullYear()}`;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    marginBottom: "1.5rem",
  },
  containerOut: {
    backgroundColor: "#F9ECFF",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    height: "fit-content",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
  },
  dateContainer: {
    backgroundColor: "white",
    display: "flex",
    width: "fit-content",
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    paddingLeft: "0.9rem",
    paddingRight: "0.9rem",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.7rem",
  },
  date: {
    fontSize: "1.1rem",
  },
  PostContainer: {
    backgroundColor: "rgba(127, 63, 152, 0.95)",
    padding: "1rem",
    borderRadius: "1rem",
    marginTop: "1rem",
  },
  postContent: {
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "light",
  },
});

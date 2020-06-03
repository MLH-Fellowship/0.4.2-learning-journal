import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import JournalPost from "./JournalPost";

const mockdata = {
  posts: [
    {
      id: "1",
      date: "06/01/2020",
      content:
        "Having the worst day so far. Setting up the app is the worst part. @tailwindcss won't render. I think I will stick to known technologies after finishing this tutorial. (#100daysofcode)",
    },
    {
      id: "2",
      date: "05/31/2020",
      content:
        "If you're looking to deploy your web apps, check these two services: * Vercel * Netlify They make it super easy to deploy your apps. I tried both and I don't prefer one over the other. Try and see which one works the best for you. #100DaysOfCode",
    },
  ],
};

export default function JournalList() {
  return (
    <ScrollView style={styles.container}>
      {mockdata.posts.map(post => <JournalPost post={post}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    padding: 24,
    flex: 1,
  },
});

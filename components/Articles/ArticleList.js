import * as React from "react";
import {StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ArticlePost from "./ArticlePost";

const mockdata = {
  posts: [
    {
      id: "1",
      date: "06/01/2020",
      title: "How to work with GraphQL & Relay",
      description: "Follow these simple and easy steps",
      url: "https://github.com",
    },
    {
      id: "2",
      date: "05/31/2020",
      title: "How to work with React Native",
      description: "Follow these simple and easy steps",
      url: "https://github.com",
    },
  ],
};

export default function ArticleList() {
  return (
    <ScrollView style={styles.container}>
      {mockdata.posts.map(post => <ArticlePost article={post} key={post.id}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    flex: 1,
  },
});

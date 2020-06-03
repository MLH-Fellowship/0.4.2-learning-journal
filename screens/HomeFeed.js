import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";

import ArticleList from "../components/Articles/ArticleList"

export default function HomeFeed() {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topContainerLeft}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.dateText}>2nd June, 2020</Text>
              <Text style={styles.welcomeText}>
                Hello, Boi!
              </Text>
            </View>
            <View style={styles.streakContainer}>
              <Text style={styles.streakNumber}>12</Text>
              <Text style={styles.streakText}>Days Streak</Text>
            </View>
          </View>
          <View style={styles.topContainerRight}>
            <View>
              <Image source={require("../assets/images/avatar.png")} style={styles.welcomeImage} />
            </View>
            <View style={styles.journalButton}>
              <Text style={styles.journalButtonText}>My Journal</Text>
            </View>
          </View>
        </View>
      <ArticleList/>
    </View>
  );
}

HomeFeed.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    flex: 1
  },
  flexContainer:{
      flex:1
  },
  topContainer: {
    backgroundColor: "#F9ECFF",
    display: "flex",
    flexDirection: "row",
  },
  topContainerLeft: {
    display: "flex",

    alignItems: "center",
    padding: 24,
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 32,
  },
  streakContainer: {
    backgroundColor: "#7F3F98",
    alignSelf: 'flex-start',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 3.2,
    borderRadius: 16,
  },
  streakNumber: {
    color: "white",
    fontSize: 30,
    lineHeight: 25,

    fontWeight: "bold",
  },
  streakText: {
    color: "white",
    fontSize: 18,
  },
  topContainerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    marginLeft: "auto",
    marginRight: 10
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  journalButton: {
    marginTop: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#7F3F98",
    padding: 3.2,
    borderRadius: 16
  },
  journalButtonText: {
    color: "#7F3F98",
    fontSize: 20,
  },
});

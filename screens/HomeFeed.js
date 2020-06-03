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
                Hello, <b>Boi!</b>
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  topContainerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateText: {
    fontSize: "1.1rem",
  },
  welcomeText: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  streakContainer: {
    backgroundColor: "#7F3F98",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.4rem",
    borderRadius: "1rem",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
  },
  streakNumber: {
    color: "white",
    fontSize: "1.9rem",
    lineHeight: "25px",
    fontWeight: "bold",
  },
  streakText: {
    color: "white",
    fontSize: "1.1rem",
  },
  topContainerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  journalButton: {
    marginTop: "1rem",
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderColor: "#7F3F98",
    padding: "0.4rem",
    borderRadius: "1rem",
  },
  journalButtonText: {
    color: "#7F3F98",
    fontSize: "1.3rem",
  },
});

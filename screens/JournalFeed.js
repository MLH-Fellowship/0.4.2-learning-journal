import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import JournalList from "../components/Posts/JournalPostList"

export default function JournalFeed() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerLeft}>
          <Text style={styles.userName}>Boi's</Text>
          <Text style={styles.journalText}>Journal</Text>
        </View>
        <View style={styles.topContainerRight}>
          <View>
            <Image source={require("../assets/images/avatar.png")} style={styles.welcomeImage} />
          </View>
        </View>
      </View>
      <JournalList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#F9ECFF",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "0.5rem"
  },
  topContainerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },
  userName:{
      fontSize: "1.8rem",
      fontWeight: "bold",
      lineHeight: "20px"
  },
  journalText:{
    fontSize: "1.8rem",
    fontWeight: "normal"
},
  topContainerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

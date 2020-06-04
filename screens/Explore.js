import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LoggerButton from "../components/Buttons/LoggerButton";

import JournalList from "../components/Posts/JournalPostList";

export default function JournalFeed({ navigation }) {
  function handleButtonPress() {
    navigation.navigate("loggerModal");
  }
  import ArticleList from "../components/Articles/ArticleList";

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerLeft}>
          <Text style={styles.userName}>Explore</Text>
        </View>
        <View style={styles.topContainerRight}>
          <View>
            <Image
              source={require("../assets/images/avatar.png")}
              style={styles.welcomeImage}
            />
          </View>
        </View>
      </View>
      <JournalList />
      <LoggerButton style={styles.logButton} callback={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#F9ECFF",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    paddingTop: 16,
  },
  topContainerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  userName: {
    fontSize: 29,
    fontWeight: "bold",
  },
  journalText: {
    fontSize: 29,
    fontWeight: "normal",
  },
  topContainerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginLeft: "auto",
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  logButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

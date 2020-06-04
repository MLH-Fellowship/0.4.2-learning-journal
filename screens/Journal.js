import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../api/Environment";

import JournalPostList from "../components/Posts/JournalPostList";
import LoggerButton from "../components/Buttons/LoggerButton";

const Header = () => {
  const today = new Date();
  const date = dateFormatter(today);
  return (
    <View style={styles.topContainer}>
      <View style={styles.topContainerLeft}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.welcomeText}>Hello, Boi!</Text>
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streakNumber}>12</Text>
          <Text style={styles.streakText}>Days Streak</Text>
        </View>
      </View>
      <View style={styles.topContainerRight}>
        <View>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.journalButton}>
          <Text style={styles.journalButtonText}>Explore</Text>
        </View>
      </View>
    </View>
  );
};
export default function HomeFeed({navigation}) {
  function handleButtonPress() {
    navigation.navigate("loggerModal");
  }
  return (
    <QueryRenderer
      environment={environment}
      query={JournalsQuery}
      render={({ error, props }) => {
        if (error) {
          return (
            <View style={styles.container}>
              <Header />
              <Text>Error {JSON.stringify(error.message)}</Text>
              <LoggerButton style={styles.logButton} callback={handleButtonPress} />
            </View>
          );
        } else if (props) {
          // console.log(props.demoJournals[0].createdAt);
          return (
            <View style={styles.container}>
              <Header />
              {/* <Text>props {JSON.stringify(props.demoJournals)}</Text> */}
              <JournalPostList journal={props.journal} />
              <LoggerButton style={styles.logButton} callback={handleButtonPress} />
            </View>
          );
        }
        return (
          <View style={styles.container}>
            <Header />
            <Text>Loading</Text>
          </View>
        );
      }}
    />
  );
}

const JournalsQuery = graphql`
  query JournalsQuery {
    journal (order_by:{date_created:desc_nulls_last}) {
      id
      title
      description
      date_created
      ...JournalPost_journal
    }
  }
`;

HomeFeed.navigationOptions = {
  header: null,
};

const dateFormatter = (date) => {
  const mlist = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${date.getDate()} ${mlist[date.getMonth()]}, ${date.getFullYear()}`;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  topContainer: {
    paddingTop: 16,
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
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 7,
    borderRadius: 12,
  },
  streakNumber: {
    color: "white",
    fontSize: 30,

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
    marginRight: 10,
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
    borderRadius: 16,
  },
  journalButtonText: {
    color: "#7F3F98",
    fontSize: 20,
  },
  logButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

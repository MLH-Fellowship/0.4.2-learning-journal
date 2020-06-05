import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LoggerButton from "../components/Buttons/LoggerButton";
import Heatmap from "../components/Heatmap";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../api/Environment";
import JournalPostList from "../components/Posts/JournalPostList";

const commitsData = [
  { date: "2020-06-02", count: 1 },
  { date: "2020-06-03", count: 2 },
  { date: "2020-06-04", count: 3 },
  { date: "2020-06-05", count: 4 },
  { date: "2020-06-06", count: 5 },
  { date: "2020-05-30", count: 2 },
  { date: "2020-05-31", count: 3 },
  { date: "2020-05-01", count: 2 },
  { date: "2020-05-02", count: 4 },
  { date: "2020-05-05", count: 2 },
  { date: "2020-05-30", count: 4 },
];

// export default function JournalFeed({ navigation }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   function handleButtonPress() {
//     navigation.navigate("loggerModal");
//   }

//   function handleHeatPress() {
//     setModalVisible(true);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <View style={styles.topContainerLeft}>
//           <Text style={styles.userName}>Explore</Text>
//         </View>
//         <View style={styles.topContainerRight}>
//           <View>
//             <Image
//               source={require("../assets/images/avatar.png")}
//               style={styles.welcomeImage}
//             />
//           </View>
//         </View>
//       </View>
//       <JournalList />
//       <LoggerButton
//         style={styles.logButton}
//         callback={handleButtonPress}
//         heatmapCallback={handleHeatPress}
//       />
//       <Modal animationType="slide" transparent visible={modalVisible}>
//         <View style={styles.modalView}>
//           <TouchableOpacity
//             style={{ alignSelf: "flex-end" }}
//             onPress={() => setModalVisible(false)}
//           >
//             <Text style={{ color: "red" }}>Close</Text>
//           </TouchableOpacity>
//           <Heatmap
//             style={{
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: 40,
//             }}
//             width={200}
//             height={350}
//             dateDetails={commitsData}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// }

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
    </View>
  );
};

export default function HomeFeed({ navigation }) {
  function handleButtonPress() {
    navigation.navigate("loggerModal");
  }
  const [modalVisible, setModalVisible] = useState(false);

  function handleHeatPress() {
    setModalVisible(true);
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
              <LoggerButton
                style={styles.logButton}
                callback={handleButtonPress}
                heatmapCallback={handleHeatPress}
              />
            </View>
          );
        } else if (props) {
          // console.log(props.demoJournals[0].createdAt);
          return (
            <View style={styles.container}>
              <Header />
              {/* <Text>props {JSON.stringify(props.demoJournals)}</Text> */}
              <JournalPostList journal={props.journal} />
              <LoggerButton
                style={styles.logButton}
                callback={handleButtonPress}
                heatmapCallback={handleHeatPress}
              />
              <Modal animationType="slide" transparent visible={modalVisible}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={{ alignSelf: "flex-end" }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={{ color: "red" }}>Close</Text>
                  </TouchableOpacity>
                  <Heatmap
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 40,
                    }}
                    width={200}
                    height={350}
                    dateDetails={commitsData}
                  />
                </View>
              </Modal>
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
    journal(order_by: { date_created: desc_nulls_last }) {
      id
      title
      description
      date_created
      ...JournalPost_journal
    }
  }
`;

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
    flex: 1,
    justifyContent: "flex-start",
  },

  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  topContainer: {
    backgroundColor: "#F9ECFF",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    paddingTop: 16,
    width: "100%",
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
    height: 60,
  },

  modalView: {
    flex: 0.8,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

import BG from "../../assets/images/bg.png";

export default function ArticlePost({article}) {
  const date = dateFormatter(article.date)
  return (
    <View style={styles.container}>
      <View style={styles.containerOut}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateDay}>{date[1]}</Text>
          <Text style={styles.dateMonth}>{date[0]}</Text>
        </View>
        <View style={styles.ArticleContainer}>
          <View style={styles.postMeta}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDesc}>{article.description}</Text>
          </View>
          <View style={styles.postInteract}>
          <Image source={require("../../assets/images/heart.png")} style={styles.welcomeImage} />
          <View style={styles.journalButton}>
              <Text style={styles.journalButtonText} onPress={handleLearnMorePress(article.url)}>Read</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const dateFormatter = raw_date => {
  const date = new Date(raw_date);
  return [date.toLocaleString('default', { month: 'short' }), date.getDate()];
}

function handleLearnMorePress(url) {
  WebBrowser.openBrowserAsync(url);
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    marginBottom: "1.5rem"
  },
  containerOut: {
    backgroundColor: "#F9ECFF",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    height: "fit-content",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
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
    marginLeft: "auto",
  },
  dateDay: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    lineHeight: "25px"
  },
  dateMonth: {
    fontSize: "1.1rem",
  },
  ArticleContainer: {
    backgroundColor: "rgba(127, 63, 152, 0.95)",
    padding: "1rem",
    borderRadius: "1rem",
    marginTop:"1rem",
    display: "grid",
    gridTemplateColumns: "2fr 1fr"
  },
  articleTitle:{
      color: "white",
      fontSize: "1.4rem",
  },
  articleDesc:{
    color: "white",
    fontSize: "1rem",
    fontWeight: "light"
  },
  titleContainer:{
      width: "65%"
  },
  titleHeart:{
  },
  welcomeImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  postInteract:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  journalButton: {
    marginTop: "1rem",
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderColor: "white",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    paddingLeft: "0.8rem",
    paddingRight: "0.8rem",
    borderRadius: "1rem",
  },
  journalButtonText: {
    color: "white",
    fontSize: "1.3rem",
  },
});

import * as React from "react";
import { Image, Platform,ImageBackground,  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

import BG from "../../assets/images/bg.png";

export default function ArticlePost({article}) {
  const date = dateFormatter(article.date)
  return (
    <View style={styles.container}>
      <View style={styles.containerOut}>
      <ImageBackground source={require("../../assets/images/bg.png")} style={styles.image}>
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
              <Text style={styles.journalButtonText}>Read</Text>
            </View>
          </View>
        </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const dateFormatter = raw_date => {
  const date = new Date(raw_date);
  const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  return [mlist[date.getMonth()], date.getDate()];
}

function handleLearnMorePress(url) {
  WebBrowser.openBrowserAsync(url);
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    marginBottom: 24
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  containerOut: {
    backgroundColor: "#F9ECFF",
    padding: 16,
    borderRadius: 16,
  },
  dateContainer: {
    backgroundColor: "white",
    display: "flex",
    alignSelf: 'flex-start',
    paddingTop: 3.2,
    paddingBottom: 3.2,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 14,
    marginLeft: "auto",
  },
  dateDay: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 25
  },
  dateMonth: {
    fontSize: 18,
  },
  ArticleContainer: {
    backgroundColor: "rgba(127, 63, 152, 0.95)",
    padding: 16,
    borderRadius: 16,
    marginTop:16,
    display: "flex",
    flexDirection: "row"

  },
  articleTitle:{
      color: "white",
      fontSize: 20,
      maxWidth: "70%"
  },
  articleDesc:{
    color: "white",
    fontSize: 14,
    fontWeight: "300",
    maxWidth: "75%"
  },
  titleContainer:{
      width: "75%"
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
    justifyContent: "center"
  },
  journalButton: {
    marginTop: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    paddingRight: 13,
    borderRadius: 16,
    marginLeft: -20
  },
  journalButtonText: {
    color: "white",
    fontSize: 20,
  },
});

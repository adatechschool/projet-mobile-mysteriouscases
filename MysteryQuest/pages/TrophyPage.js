import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import Svg, { G, Path } from "react-native-svg";
import TrophyLogo from "../components/TrophyLogo";

const TrophyPage = () => {
  const trophylist = [
    {
      title: "Trophée 1",
      desc: "Description du Trophée 1",
      unlocked: false,
    },
    {
      title: "Trophée 2",
      desc: "Description du Trophée 2",
      unlocked: true,
    },
    {
      title: "Trophée 3",
      desc: "Description du Trophée 3",
      unlocked: false,
    },
    {
      title: "Trophée 4",
      desc: "Description du Trophée 4",
      unlocked: false,
    },
    {
      title: "Trophée 5",
      desc: "Description du Trophée 5",
      unlocked: true,
    },
    {
      title: "Trophée 6",
      desc: "Description du Trophée 6",
      unlocked: false,
    },
    {
      title: "Trophée 7",
      desc: "Description du Trophée 7",
      unlocked: false,
    },
    {
      title: "Trophée 8",
      desc: "Description du Trophée 8",
      unlocked: false,
    },
    {
      title: "Trophée 9",
      desc: "Description du Trophée 9",
      unlocked: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Trophées :</Text>
      <FlatList
        data={trophylist}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.card}>
            <View>
              <TrophyLogo unlocked={item.unlocked} width={60} height={50} />
            </View>
            <View>
              <Text
                style={
                  item.unlocked ? styles.itemTitle : styles.unlockedItemTitle
                }
              >
                {item.title}
              </Text>
              <Text style={item.unlocked ? styles.desc : styles.unlockedDesc}>
                {item.desc}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderRadius: 25,
    padding: 10,
    color: "#EAB308",
    display: "flex",
    flexDirection: "row",
  },
  itemTitle: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  unlockedItemTitle: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Mystery",
    color: "rgba(234,179,8,0.2)",
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    color: "#EAB308",
  },
  unlockedDesc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    color: "rgba(234,179,8,0.2)",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 30,
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  trophy: {
    color: "#ffffff",
  },
});

export default TrophyPage;

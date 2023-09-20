import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-native";
import { useNavigate } from "react-router-native";
import { useState, useEffect } from "react";
import FetchLocalisation from "../components/FetchLocalisation";

const QuestStartPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quest, setQuest] = useState(null);

  // Récupération des données de la quête en utilisant l'ID de l'URL
  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/quests/getSingleQuest/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].title);
        setQuest(data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement de la quête", error);
      });
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView>
        <Text style={styles.title}>
          {quest ? quest[0].title : "Chargement en cours..."}
        </Text>
        <View style={styles.blurryBackground}>
          <Text style={styles.desc}>
            {" "}
            {quest ? quest[0].story : "Chargement en cours..."}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate(`/QuestStepPage/${quest[0].id}/1`);
          }}
        >
          <Text style={styles.textButton}>Commencer la quête</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    padding: 10,
  },
  blurryBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 25,
    padding: 10,
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    lineHeight: 30,
    color: "#EAB308",
    padding: 4,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 20,
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 60,
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: "#EAB308",
  },
  textButton: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    lineHeight: 24,
    fontSize: 16,
    color: "#1e1b4b",
  },
});

export default QuestStartPage;

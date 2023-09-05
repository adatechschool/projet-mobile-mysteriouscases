import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import Svg, { G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";

const HomePage = () => {

  const navigate = useNavigate();

  const quests = [
    {
      title: "La Malette à Mamie",
      desc: "Explorez le quartier, résolvez des énigmes et découvrez les souvenirs cachés pour retrouver la malette perdue de Mamie.",
    },
    {
      title: "Où est Camille ?",
      desc: "Camille, la petite fille que tu devais garder a disparu. Retrouve-la rapidement avant que ses mamans rentrent du travail !",
    },
    {
      title: "Les Ailes d'Élara",
      desc: "Découvrez les mystères de Paris en aidant la fée Élara à retrouver des fragments magiques et à sauver l'équilibre entre les mondes.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Quêtes disponibles :</Text>
      <FlatList
        data={quests}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.questContainer}>
            <TouchableOpacity 
              onPress={() => {
                console.log("je dois rediriger vers la quete ", index);
                navigate("/QuestStartPage");
              }}
              style={styles.blurryBackground}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <View
                style={styles.buttonContainer}
              >
                <Svg
                  width="77"
                  height="12"
                  viewBox="0 0 77 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <G>
                    <Path
                      d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM77 6L67 0.226497V11.7735L77 6ZM6 7H68V5H6V7Z"
                      fill="#EAB308"
                      fillOpacity="0.8" // Utilisez fillOpacity au lieu de fill-opacity
                    />
                  </G>
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        )}
        style={styles.list}
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
  list: {
    flex: 1,
    marginTop: 10,
  },
  questContainer: {
    marginBottom: 20, // Ajoutez un espacement entre chaque quête
  },
  blurryBackground: {
    backgroundColor: "rgba(128, 128, 128, 0.3)", // Opacité appliquée ici
    borderRadius: 25, // Appliquez la bordure au fond flou
    padding: 10, // Ajoutez un espacement autour du fond flou
  },
  itemTitle: {
    fontSize: 29,
    textAlign: "center",
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "center",
    fontSize: 20,
    color: "#EAB308",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    paddingTop: 50,
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  buttonContainer: {
    alignItems: "flex-end", // Centrer horizontalement
    marginTop: 15,
    marginBottom: 5,
    paddingRight: 20,
  },
});

export default HomePage;

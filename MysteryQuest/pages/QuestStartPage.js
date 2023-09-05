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
import { useNavigate } from "react-router-native";

const QuestStartPage = () => {

    const navigate = useNavigate();


      return (
        <SafeAreaView style={styles.container}>
          <Navbar />
            <Text style={styles.title}>Quest Title</Text>
            <View style={styles.blurryBackground}> 
                <Text style={styles.desc}> Quest description </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {navigate("/QuestStepPage")}}>
                <Text style={styles.textButton}>Commencer la quête</Text>
            </TouchableOpacity>
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
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Opacité appliquée ici
      borderRadius: 25, // Appliquez la bordure au fond flou
      padding: 10, // Ajoutez un espacement autour du fond flou
    },
    desc: {
      fontFamily: "Baskerville",
      textAlign: "justify",
      lineHeight: 24,
      fontSize: 12,
      color: "#EAB308",
    },
    title: {
      fontSize: 35,
      textAlign: "center",
      paddingTop: 50,
      paddingBottom: 20,
      fontFamily: "Mystery",
      color: "#EAB308",
    },
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        margin: 60,
        borderRadius: 15,
        backgroundColor: '#EAB308',
        fontFamily: "Mystery",
    },
    textButton: {
        fontFamily: "Baskerville",
        textAlign: "justify",
        lineHeight: 24,
        fontSize: 16,
        color: "#1e1b4b",
    }
  });

export default QuestStartPage;
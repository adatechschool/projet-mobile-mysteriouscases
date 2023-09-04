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

const RulesPage = () => {


      return (
        <SafeAreaView style={styles.container}>
          <Navbar />
            <Text style={styles.title}>Règles du jeu :</Text>
            <View style={styles.blurryBackground}> 
                <Text style={styles.desc}> Mystery Quest est un jeu de chasse au trésor. Sélectionnez votre aventure, Puis cliquez sur démarrer la quête. Tentez de retrouver où a été prise la photo qui s'affiche à l'écran le plus rapidement possible. {"\n"} Une fois au bon endroit, envoyez votre localisation. {"\n"} Si jamais vous bloquez, vous pouvez réléver des indices mais attention : une pénalité de temps sera appliquée. </Text>
            </View>
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
  });

export default RulesPage;
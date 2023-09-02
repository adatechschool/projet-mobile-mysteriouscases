import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Svg, { G, Path } from "react-native-svg";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-native";

function SettingPage() {
  const navigate = useNavigate();
  const cross = (
    <Svg
      style={styles.cross}
      width="15"
      height="15"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.275 22.75L0 20.475L9.1 11.375L0 2.275L2.275 0L11.375 9.1L20.475 0L22.75 2.275L13.65 11.375L22.75 20.475L20.475 22.75L11.375 13.65L2.275 22.75Z"
        fill="#EAB308"
        fill-opacity="0.74"
      />
    </Svg>
  );
  return (
    <View>
      <TouchableOpacity onPress={() => navigate(-1)}>{cross}</TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.container} onPress={() => navigate("/HomePage")}>
            Accueil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.container} onPress={() => navigate("/RulesPage")}>
            Règles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.container}
            onPress={() => navigate("/TrophyPage")}
          >
            Trophées
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.container}
            onPress={() => navigate("/RankingPage")}
          >
            Classement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.container}
            onPress={() => navigate("/ProfilePage")}
          >
            Profil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontFamily: "Baskerville",
    fontSize: 28,
  },
  cross: {},
  menuOpen: {
    top: 0, // Positionnez le menu en haut de son conteneur parent
    left: 0, // Positionnez le menu tout à gauche
    width: "100%", // Occupe toute la largeur du conteneur parent
    zIndex: 1, // Pour garantir que le menu s'affiche au-dessus du contenu
  },
});
export default SettingPage;

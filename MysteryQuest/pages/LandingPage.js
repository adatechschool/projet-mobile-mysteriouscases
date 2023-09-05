import { View, Text, Button, StyleSheet, Pressable, TouchableOpacity, Modal } from "react-native";
import { useNavigate } from "react-router-native";
import Svg, { G, Path, Rect } from "react-native-svg";
import React, { useState } from "react";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";

const LandingPage = () => {

  const navigate = useNavigate(); // Obtenir la fonction de navigation

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConnexion, setShowConnexion] = useState(false);
  const [showInscription, setShowInscription] = useState(false);

  const openConnexion = () => {
    setShowConnexion(true);
  };
  const closeConnexion = () => {
    setShowConnexion(false);
  };
  
  const openInscription = () => {
    setShowInscription(true);
  };
  const closeInscription = () => {
    setShowInscription(false);
  };


  return (
    <View>
      <Text style={styles.title}>Mystery Quest</Text>
      {isLoggedIn ? (
        <TouchableOpacity style={styles.button} onPress={() => {navigate("/HomePage")}}>
          <Text>Jouer</Text>
        </TouchableOpacity>
      ) : (
        <><TouchableOpacity style={styles.button} onPress={openConnexion}>
            <Text>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openInscription}>
              <Text style={styles.desc} >Créer un compte</Text>
          </TouchableOpacity>
        </>
      )
    }
    
      {showConnexion && (
        <View style={styles.overlay}>
          <Connexion onClose={closeConnexion}/>
        </View>
      )}
      {showInscription && (
        <View style={styles.overlay}>
          <Inscription onClose={closeInscription}/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#EAB308",
    fontFamily: "Mystery",
    fontSize: 60,
    textAlign: "center",
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 130,
    borderRadius: 15,
    backgroundColor: '#EAB308',
    fontFamily: "Mystery",

  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 12,
    color: "#EAB308",
    textDecorationLine:"underline"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LandingPage;

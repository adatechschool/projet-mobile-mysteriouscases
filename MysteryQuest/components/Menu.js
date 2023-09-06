import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Svg, { G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";

const Menu = () => {
  const navigate = useNavigate(); // Obtenir la fonction de navigation

  // If faudra faire le routes pour les autres onglet du menu quand on les aura crée

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu);
  };

  const hamburger = (
    <Svg
      width={25}
      height={30}
      viewBox="0 0 448 512"
      style={styles.hamburgerLogo}
    >
      <G fill="#eab308">
        <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </G>
    </Svg>
  );

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        {menu ? navigate("/SettingPage") : hamburger}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hamburgerLogo: {
    position: "absolute",
    top: 8, // Positionnez le menu en haut de son conteneur parent
    right: -12,
  },
  container: {
    backgroundColor: "white",
    fontFamily: "Baskerville",
    fontSize: 28,
  },
  cross: {},
  menuOpen: {
    position: "absolute",
    top: -90, // Positionnez le menu en haut de son conteneur parent
    right: 10, // Positionnez le menu tout à gauche
    width: "100%", // Occupe toute la largeur du conteneur parent
    zIndex: 1, // Pour garantir que le menu s'affiche au-dessus du contenu
  },
});
export default Menu;

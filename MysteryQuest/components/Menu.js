import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Svg, { G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";

const Menu = () => {
  const navigate = useNavigate(); // Obtenir la fonction de navigation

  // If faudra faire le routes pour les autres onglet du menu quand on les aura crée

  const [menu, setMenu] = useState(true); // on false the menu is ON lol

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu);
  };

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
  const hamburger = (
    <Svg width={24} height={24} viewBox="0 0 448 512">
      <G fill="#eab308">
        <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </G>
    </Svg>
  );

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        {menu ? cross : hamburger}
      </TouchableOpacity>
      <View style={menu ? styles.menuOpen : null}>
        {menu && (
          <View style={styles.container}>
            <TouchableOpacity>
              <Text style={styles.container}onPress={() => navigate("/HomePage")}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.container} onPress={() => navigate("/RulesPage")}>Règles</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.container} onPress={() => navigate("/TrophyPage")}>Trophées</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.container} onPress={() => navigate("/RankingPage")}>Classement</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.container} onPress={() => navigate("/ProfilePage")}>Profil</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontFamily: "Baskerville",
    fontSize: 28

  },
  cross: {
  },
  menuOpen: {
    top: 0, // Positionnez le menu en haut de son conteneur parent
    left: 0, // Positionnez le menu tout à gauche
    width: "100%", // Occupe toute la largeur du conteneur parent
    zIndex: 1, // Pour garantir que le menu s'affiche au-dessus du contenu
  },
});
export default Menu;

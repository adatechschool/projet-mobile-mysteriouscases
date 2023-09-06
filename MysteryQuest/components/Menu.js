import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Navbar from "./Navbar";
import { Link } from "react-router-native";

const Menu = () => {
  return (
    <View>
      <Navbar />
      <Link to="/QuestStartPage">
        <Text> Coucou je suis le menu</Text>
      </Link>
    </View>
  );
};

export default Menu;

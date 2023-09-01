import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import Svg, { G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.title}>Mystery Quest</Text>
      </Link>
      <View>
      <Menu />
    </View>
    </View>

  );
};
const styles = StyleSheet.create({
  title: {
    color: "#EAB308",
    fontFamily: "Mystery",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom:10
  },
});
export default Navbar;

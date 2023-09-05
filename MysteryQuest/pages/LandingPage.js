import { View, Text, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import Navbar from "../components/Navbar";

const LandingPage = () => {

  const navigate = useNavigate(); // Obtenir la fonction de navigation


  return (
    <View>
      <Text style={styles.title}>Mystery Quest</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigate("/HomePage")}}>
        <Text>Jouer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {navigate("/QuestStartPage")}}>
        <Text>Quest Start(bouton à supprimer)</Text>
      </TouchableOpacity>

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
});

export default LandingPage;

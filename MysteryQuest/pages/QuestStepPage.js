import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-native";
import Timer from "../components/Timer";
import Clue from "../components/Clue";

const QuestStepPage = () => {

    // const navigate = useNavigate();


      return (
        <SafeAreaView style={styles.container}>
          <Navbar/>
          <ScrollView>

            <Text style={styles.title}>Etape x : nom de l'étape</Text>
            <View style={{alignItems:"center"}}>
                <Image
                    source={{ uri: 'https://picsum.photos/300/300' }} // Remplacez l'URL par celle de l'image que vous souhaitez afficher
                    style={styles.image} 
                    />
            </View>
            {/* <TouchableOpacity style={styles.clueBackground}> 
                <Text style={[styles.clue]}> Débloquer un indice </Text>
            </TouchableOpacity> */}
            <Clue/>
            <Timer/>
          </ScrollView>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    clue: {
        fontSize: 28,
        textAlign: "center",
        padding: 20,
        fontFamily: "Baskerville",
        color: "#EAB308",
    },
    container: {
      flex: 1,
      margin: 13,
      padding: 10,
    },
    clueBackground: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", 
      borderRadius: 25,
      padding: 10,
      marginVertical:20
    },
    desc: {
      fontFamily: "Baskerville",
      textAlign: "justify",
      lineHeight: 24,
      fontSize: 12,
      color: "#EAB308",
    },
    image:{
        width: 300, 
        height: 300,
        resizeMode:'contain',
        borderRadius:20,
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
        margin: 10,
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

export default QuestStepPage;
import React from "react";
import {
  View,
  Alert,
  Button,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";


const QuestStartPage = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Please grant location permissions.");
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      });

      setLocation(currentLocation);
      console.log("Location:", currentLocation);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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
    <View>
      <Button title="Get Location" onPress={getLocation}></Button>
      {location && (
        <Text>
          Latitude: {location.coords.latitude}, Longitude:
          {location.coords.longitude}''
        </Text>
      )}
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

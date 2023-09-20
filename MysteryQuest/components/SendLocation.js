import React, { useState }  from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigate } from "react-router-native";
import * as Location from "expo-location";

const SendLocation = ({onWrongLocationPress, data}) => {

    const navigate = useNavigate();
    const [userLocation, setUserLocation] = useState(null);
    const [rightLocation, setRightLocation] = useState(false);

    //Récupération de la localisation de l'utilisateur
    const getUserLocation = async () => {
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
        setUserLocation(currentLocation);
        // console.log("Location:", currentLocation);
        } 
        catch (error) {
        console.error("localisation inconnue",error.message);
        }
    };

    //Compare la localisation de l'utilisateur et celle de la quette
    const compareLocations = (userLat, userLon, goalLat, goalLon) => {
        const latDifference = Math.abs(userLat - goalLat);
        const lonDifference = Math.abs(userLon - goalLon);
        const threshold = 0.0002

        if (latDifference <= threshold && lonDifference <= threshold) {
            console.log("Gagné, vous êtes au bon endroit !");
            return true;
        } else {
            console.log("Et non, tu es trop loin !");
            return false;
        } 
    };

    //Actions lorsqu'on appuie sur le bouton "Envoyer ma localisation"
    const handlePress = async () => {

        await getUserLocation();

        if (userLocation) {
            console.log(`userLattitude: ${userLocation.coords.latitude}, userLongitude: ${userLocation.coords.longitude}, stepLattitude: ${data.lattitude}, stepLongitude: ${data.longitude}`);

            const isLocationCorrect = compareLocations(userLocation.coords.latitude, userLocation.coords.longitude, data.lattitude, data.longitude);

            if (isLocationCorrect) {
                setRightLocation(true);
                navigate(`/QuestSuccessPage/${data.quest}/${data.step_number}`)
            }
            else {
                onWrongLocationPress();
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.button} 
            onPress={handlePress}
            > 
                <Text style={styles.textButton}>Envoyer ma localisation</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection:'column',
      justifyContent:"space-between"
    },
    button: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 15,
        backgroundColor: '#EAB308',
        fontFamily: "Mystery",
        width:150
    },
    textButton: {
        fontFamily: "Baskerville",
        textAlign: "justify",
        lineHeight: 24,
        fontSize: 16,
        color: "#1e1b4b",
    },
  });

export default SendLocation;
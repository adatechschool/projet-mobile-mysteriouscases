import React, { useState, useEffect }  from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { Svg, G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";
import * as Location from "expo-location";

const SendLocation = ({onWrongLocationPress, data}) => {


    const navigate = useNavigate();
    const [userLocation, setUserLocation] = useState(null);
    const [rightLocation, setRightLocation] = useState(false);



    //Récupération de la localisation
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
        console.log("Location:", currentLocation);
        } 
        catch (error) {
        console.error("localisation inconnue",error.message);
        }
    };

    const validateLocation = () => {
      setRightLocation(true);
    };

    const checkLocation = () => {
    //   setIsRunning(false);
    //   setSavedTime(elapsedTime);
        console.log("console log à l'interieur de checklocation", data.quest, data.step_number);
        console.log(`/QuestSuccessPage/${data.quest}/${data.step_number}`)
        navigate(`/QuestSuccessPage/${data.quest}/${data.step_number}`);
        // validateLocation()
        
    };




    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.button} 
                onPress={rightLocation ? checkLocation : onWrongLocationPress }
                > 
                    <Text style={styles.textButton}>Envoyer ma localisation</Text>
                </TouchableOpacity>
            </View>
                    
            <View>
                <Button title="Get Location" onPress={getUserLocation}></Button>
                {userLocation && (
                    <Text>
                    Latitude: {userLocation.coords.latitude}, Longitude:
                    {userLocation.coords.longitude}''
                </Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
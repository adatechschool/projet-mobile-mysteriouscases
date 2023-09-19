import React, { useState, useEffect }  from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { Svg, G, Path } from "react-native-svg";
import { useNavigate } from "react-router-native";

const SendLocation = ({onWrongLocationPress, data}) => {


    const navigate = useNavigate();

    const [rightLocation, setRightLocation] = useState(true);

    const validateLocation = () => {
      setRightLocation(true);
    };

    const checkLocation = () => {
    //   setIsRunning(false);
    //   setSavedTime(elapsedTime);
        console.log("console log à l'interieur de checklocation", data.quest, data.step_number);
        console.log(`/QuestSuccessPage/${data.quest}/${data.step_number}`)
        navigate(`/QuestSuccessPage/${data.quest}/${data.step_number}`);
    };




    return (
        <View style={styles.container}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={rightLocation ? checkLocation : onWrongLocationPress }
            > 
                <Text style={styles.textButton}>Envoyer ma localisation</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
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
import React, { useState, useEffect }  from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { Svg, G, Path } from "react-native-svg";

const Timer = () => {


    const [isRunning, setIsRunning] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [savedTime, setSavedTime] = useState(0);
  
    useEffect(() => {
      let interval;
  
      if (isRunning) {
        interval = setInterval(() => {
          setElapsedTime(prevTime => prevTime + 1);
        }, 1000); // Mettez à jour toutes les 1 seconde
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval); // Nettoyage du setInterval lors du démontage du composant
    }, [isRunning]);
  

    // Fonction pour formater le temps en hh:mm:ss
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        // Ajouter des zéros initiaux si nécessaire
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.timer}>
                <Svg height="24" viewBox="0 -960 960 960"width="24">
                    <Path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"
                        fill='#eab308'/>
                </Svg>
                <Text style={styles.chronometerText}> {formatTime(elapsedTime)} </Text>
            </View>
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
    chronometerText: {
      fontSize: 20,
      color: "#eab308",
      fontFamily: "Baskerville",
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
    timer:{
        flex:1,
        flexDirection:'row'
    }
  });

export default Timer;
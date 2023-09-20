import React, { useState, useEffect }  from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { Svg, G, Path } from "react-native-svg";

const Timer = () => {

  const [startTime, setStartTime] = useState(Date.now()); //à remplacer par la BDD (table scores, colonne start)
  const [elapsedTime, setElapsedTime] = useState(0);

  // Mettre à jour le chronomètre chaque seconde
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, [startTime]);

  // Convertir le temps écoulé en format hh:mm:ss
  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;

    const pad = (value) => (value < 10 ? `0${value}` : `${value}`);

    return `${pad(hours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
  };

  return (
          <View style={styles.timer}>
              <Svg height="24" viewBox="0 -960 960 960"width="24">
                  <Path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"
                      fill='#eab308'/>
              </Svg>
              <Text style={styles.chronometerText}> {formatElapsedTime(elapsedTime)} </Text>
          </View>
  );
};

const styles = StyleSheet.create({
    chronometerText: {
      fontSize: 20,
      color: "#eab308",
      fontFamily: "Baskerville",
    },
    timer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    }
  });

export default Timer;
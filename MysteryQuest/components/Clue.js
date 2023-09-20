import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Clue = ({data}) => {

    //Gestion de l'affichage de l'indice
    const [isClueUnlocked, setIsClueUnlocked] = useState(false);
    const handleUnlockClue = () => {
        setIsClueUnlocked(true);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.clueBackground}
                onPress={handleUnlockClue}> 
                <Text style={ isClueUnlocked ? styles.clueUnlocked : styles.clue} >
                    {isClueUnlocked ? data : "Débloquer un indice"}
                </Text>
            </TouchableOpacity>
        </View>
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
    clueUnlocked: {
        fontSize: 14,
        textAlign: "center",
        padding: 20,
        fontFamily: "Baskerville",
        color: "#EAB308",
    },
    clueBackground: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", 
      borderRadius: 25,
      padding: 10,
      marginVertical:20
    }
  });

export default Clue;
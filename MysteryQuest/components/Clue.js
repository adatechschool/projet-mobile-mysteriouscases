import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Clue = () => {

    const clues = [
        {
            id:1,
            questID: 1,
            clueNumber: 1,
            description: "C'est pas très loin d'Ada."
        },
        {
            id:2,
            questID: 1,
            clueNumber: 2,
            description: "On adore pique-niquer là-bas"
        },
        {
            id:3,
            questID: 2,
            clueNumber: 1,
            description: "La légende dit que ce lieu est hanté"
        }
    ]
    const [isClueUnlocked, setIsClueUnlocked] = useState(false);

    const handleUnlockClue = () => {
        setIsClueUnlocked(true);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.clueBackground}
                onPress={handleUnlockClue} // Lorsque l'utilisateur appuie sur le bouton
            > 
                <Text 
                    style={
                        isClueUnlocked ? styles.clueUnlocked : styles.clue
                    }>
                    {isClueUnlocked ? clues[0].description : "Débloquer un indice"}
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
        fontSize: 20,
        textAlign: "center",
        padding: 10,
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

export default Clue;
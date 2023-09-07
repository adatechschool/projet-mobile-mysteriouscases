import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import Svg, { G, Path, Rect } from "react-native-svg";
import { useNavigate } from "react-router-native";

const WrongLocation = ({onClose}) => {

    const navigate = useNavigate();

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.cross} onPress={onClose}>
                    <Svg  width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path
                            d="M2.275 22.75L0 20.475L9.1 11.375L0 2.275L2.275 0L11.375 9.1L20.475 0L22.75 2.275L13.65 11.375L22.75 20.475L20.475 22.75L11.375 13.65L2.275 22.75Z"
                            fill="#EAB308"
                            fill-opacity="0.74"
                            />
                    </Svg>
                </TouchableOpacity>
                <Text style={styles.title}>Raté !</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 12,
      marginHorizontal: 60,
      borderRadius: 15,
      backgroundColor: '#EAB308',
    },
    container:{
        backgroundColor: "#1E1B4B",
        borderRadius: 25, // Appliquez la bordure au fond flou
        padding: 20, // Ajoutez un espacement autour du fond flou
        // margin: 20,
        borderColor: "#eab308",
        borderWidth:1,
        flexDirection:"column"
    },
    cross:{
        alignItems:"flex-end"
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#eab308',
        borderRadius:15,
        padding: 10,
        marginBottom: 20,
        backgroundColor:"white"
    },
    textContent:{
        color: "#EAB308",
        fontFamily: "Baskerville",
        fontSize: 16,
        textAlign: "left",
        paddingVertical: 10,
    },
    title: {
        color: "#EAB308",
        fontFamily: "Mystery",
        fontSize: 36,
        textAlign: "center",
        paddingVertical: 20,
      },

})

export default WrongLocation;
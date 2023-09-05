import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import Navbar from './Navbar';
import Svg, { G, Path, Rect } from "react-native-svg";
import { useNavigate } from "react-router-native";

const Inscription = () => {

    const navigate = useNavigate();

    return (
        <View>
            <Navbar/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.cross}>
                    <Svg  width="35" height="25" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path
                            d="M2.275 22.75L0 20.475L9.1 11.375L0 2.275L2.275 0L11.375 9.1L20.475 0L22.75 2.275L13.65 11.375L22.75 20.475L20.475 22.75L11.375 13.65L2.275 22.75Z"
                            fill="#EAB308"
                            fill-opacity="0.74"
                            />
                    </Svg>
                </TouchableOpacity>
                <Text style={styles.title}>Inscription</Text>
                <Text style={styles.textContent}>Nom d'utilisateur</Text>
                <TextInput
                    style={styles.input}
                    placeholder="titesayadu95"
                    keyboardType="default" // Utilisez le clavier de l'e-mail
                    autoCapitalize="none" // Ne pas auto-capitaliser
                    autoCorrect={false} // Désactiver la correction automatique
                    // value={email}
                    // onChangeText={handleEmailChange}
                />
                <Text style={styles.textContent}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="sayadynadu95@hotmail.fr"
                    keyboardType="email-address" // Utilisez le clavier de l'e-mail
                    autoCapitalize="none" // Ne pas auto-capitaliser
                    autoCorrect={false} // Désactiver la correction automatique
                    // value={email}
                    // onChangeText={handleEmailChange}
                />
                <Text style={styles.textContent}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true} // Masquer les caractères saisis
                    autoCapitalize="none" // Ne pas auto-capitaliser
                    autoCorrect={false} // Désactiver la correction automatique
                    // value={password}
                    // onChangeText={handlePasswordChange}
                />
                <Text style={styles.textContent}>Confirmation du mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true} // Masquer les caractères saisis
                    autoCapitalize="none" // Ne pas auto-capitaliser
                    autoCorrect={false} // Désactiver la correction automatique
                    // value={password}
                    // onChangeText={handlePasswordChange}
                />
                <TouchableOpacity style={styles.button} onPress={() => {navigate("/Connexion")}}>
                    <Text>Inscription</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      paddingVertical: 12,
      marginHorizontal: 100,
      borderRadius: 15,
      backgroundColor: '#EAB308',
    },
    container:{
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Opacité appliquée ici
        borderRadius: 25, // Appliquez la bordure au fond flou
        padding: 10, // Ajoutez un espacement autour du fond flou
        margin: 20,
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

export default Inscription;
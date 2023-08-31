
import { View, Text, Button,StyleSheet } from 'react-native';
import {Link, useNavigate } from "react-router-native";




const LandingPage = () => {

    const navigate = useNavigate(); // Obtenir la fonction de navigation
        
    const goToHomePage = () => {
        navigate('/HomePage'); // Naviguer vers la route HomePage
    };

    return (
        <View>
            <Text style={styles.text}>Mystery Quest</Text>
            <Button
                title='Jouer'
                onPress={goToHomePage}>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        color: '#EAB308',
        
    },
    

})

export default LandingPage;
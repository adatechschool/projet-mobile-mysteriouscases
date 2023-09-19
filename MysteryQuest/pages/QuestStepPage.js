import React, { useState, useEffect }  from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-native";
import Timer from "../components/Timer";
import Clue from "../components/Clue";
import WrongLocation from "../components/WrongLocation";
import SendLocation from "../components/SendLocation";

const QuestStepPage = () => {

  const navigate = useNavigate();

  //Gestion de la mauvaise localisation
  const [ShowWrongLocation, setShowWrongLocation] = useState(false);
  const openWrongLocation = () => {
    setShowWrongLocation(true);
  };
  const closeWrongLocation = () => {
    setShowWrongLocation(false);
  };

  const [step, setStep] = useState();
  const {questId, stepNumber} = useParams()



  //Récupération des données de l'étape de la quête grâce à la quesId et à la step dans l'URL
  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/steps/getSingleStep/${questId}/${stepNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0])
        setStep(data);})
      .catch((error) => {
        console.error("Erreur lors du chargement de l'étape", error);
      });
  }, [questId, stepNumber]);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      {step ? (
        <>
          <Text style={styles.title}>Etape {step[0].step_number}</Text>
          <View style={styles.blurryBackground}> 
            <Text style={styles.desc}>   {step[0].step_text}</Text>
          </View>
          <View style={{alignItems:"center"}}>
              <Image
                source={{ uri: step[0].step_image }} // Remplacez l'URL par celle de l'image que vous souhaitez afficher
                style={styles.image} 
              />
          </View>
          <Clue data={step[0].clue1} />
          <Clue data={step[0].clue2} />
          <Clue data={step[0].clue3} /> 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Timer />
            <SendLocation 
              onWrongLocationPress={openWrongLocation}
              data={step[0]}
              />
          </View>
        </>
      ):(
        <Text style={styles.title}>Chargement en cours...</Text>
      )}
        
      {ShowWrongLocation && (
        <View style={styles.overlay}>
          <WrongLocation onClose={closeWrongLocation}/>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    blurryBackground: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      borderRadius: 25,
      padding: 10,
    },
    clue: {
        fontSize: 28,
        textAlign: "center",
        padding: 20,
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
      fontSize: 14,
      lineHeight:24,
      color: "#EAB308",
      padding:4,
    },
    image:{
        width: 300, 
        aspectRatio:1,
        borderRadius:20,
        marginTop:20
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
    },
    overlay: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 250,
      // backgroundColor: "rgba(0, 0, 0, 0.3)",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default QuestStepPage;
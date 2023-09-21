import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import ModalDropdown from 'react-native-modal-dropdown';

const RankingPage = () => {


  const [scores, setScores] = useState([])
  const [selectedQuestId, setSelectedQuestId] = useState(null);

  //Récupérer les scores en fonction de l'ID de la quête
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/scores/getAllScores`
        );

        if (response.ok) {
          const data = await response.json();
          setScores(data);
        } else {
          console.error('Erreur lors de la requête GET des scores');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête GET des scores :', error);
      }
    };

    fetchScores();
  }, []);


  //Fonction pour filtrer les scores par quêtes
  const filterScoresByQuest = () => {
    return scores.filter((score) => score.quest === selectedQuestId);
  };

  //Fonction pour convertir score.timeInSeconds au format hh:mm:ss
  function convertTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    const pad = (value) => (value < 10 ? `0${value}` : `${value}`);
    
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  }
    
    
    // Fonction pour changer la quête actuellement sélectionnée
    const handleQuestChange = (questId) => {
        setSelectedQuestId(questId);
    };



  return (
    <SafeAreaView style={styles.container}>
        <Navbar />
        <Text style={styles.title}>Classement des joueurs :</Text>
        <ModalDropdown 
            options={scores.map((score) => score.quest)}
            defaultValue="Sélectionne une quête ▼"
            onSelect={(option) => handleQuestChange(option.quest)}
            textStyle={{color:"#eab308", fontSize: 16, fontFamily:"Baskerville"}}
            dropdownStyle={{backgroundColor:'#1e1b4b', borderColor: '#eab308'}}
            dropdownTextStyle={{backgroundColor:'#1e1b4b',color:"#eab308", fontFamily:"Baskerville", fontSize:12}}
            dropdownTextHighlightStyle={{color:"#eab308", fontFamily:"Baskerville", fontSize:12}}
            
            />
        <Text style={styles.title2}>weekly | monthly | all time</Text>


        <View style={styles.table}>
            <View style={styles.tableContent}>
                <Text style={styles.tableContent}>Rang</Text>
                <Text style={styles.tableContent}>Joueur</Text>
                <Text style={styles.tableContent}>Score</Text>
            </View>
            <FlatList
                data={scores}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.tableContent}>
                    <Text style={styles.tableContent}>{index + 1}</Text>
                    <Text style={styles.tableContent}>{item.user}</Text>
                    <Text style={styles.tableContent}>{convertTime(item.timeInSeconds)}</Text>
                </View>
                )}
                />
        </View>
        <Text style={[styles.title, {fontSize:24}]}>mon classement :</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderRadius: 25,
    padding: 10,
    color: "#EAB308",
    display: "flex",
    flexDirection: "row",
  },
  itemTitle: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    color: "#EAB308",
  },
  table: {
    borderWidth: 1, // Bordure inférieure
    borderColor: '#eab308', // Couleur de la bordure
    backgroundColor: 'rgba(0,0,0,0.2)', // Couleur de fond légèrement transparente
    padding: 10,
  },
  tableContent:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    fontFamily: "Baskerville",
    fontSize: 16,
    color: "#EAB308",
    paddingVertical: 4,
  },
  title2: {
    fontFamily: "Baskerville",
    textAlign: "center",
    fontSize: 16,
    color: "#EAB308",
    paddingVertical: 16,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 30,
    fontFamily: "Mystery",
    color: "#EAB308",
  },
  trophy: {
    color: "#ffffff",
  },
});

export default RankingPage;


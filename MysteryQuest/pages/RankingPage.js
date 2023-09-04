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

    //BDD des joueurs et de leurs scores
    //Probablement plus pertinent de créer une table score par quête et de mettre "username |score" plutôt que de faire une table par joueur
    const players = [
        {
            Username: "Camilledu91",
            score1: "00:30:25",
            score2: "01:10:51",
            score3: "02:01:13"
        },
        {
            Username: "TiteSayaaa",
            score1: "00:59:18",
            score2: "00:48:23",
            score3: "02:19:49"
        },
        {
            Username: "AlanBGluv",
            score1: "01:13:00",
            score2: "01:01:18",
            score3: "00:54:20"
        }
    ];

    //BDD des quêtes
    const quests = [
        {
            title: "La Malette à Mamie",
            id:1,
            desc: "Explorez le quartier, résolvez des énigmes et découvrez les souvenirs cachés pour retrouver la malette perdue de Mamie.",
        },
        {
            title: "Où est Camille ?",
            id:2,
            desc: "Camille, la petite fille que tu devais garder a disparu. Retrouve-la rapidement avant que ses mamans rentrent du travail !",
        },
        {
            title: "Les Ailes d'Élara",
            id:3,
            desc: "Découvrez les mystères de Paris en aidant la fée Élara à retrouver des fragments magiques et à sauver l'équilibre entre les mondes.",
        },

    ];


    
    
    // Fonction pour trier les joueurs en fonction d'un score donné
    const sortPlayersByScore = (scoreKey) => {
        return players.slice().sort((a, b) => {
            const scoreA = a[scoreKey];
            const scoreB = b[scoreKey];
            return compareTimes(scoreA, scoreB);
        });
    };
    // Fonction pour comparer deux temps (au format hh:mm:ss)
    const compareTimes = (timeA, timeB) => {
        // Convertir les temps en secondes pour la comparaison
        const secondsA = convertToSeconds(timeA);
        const secondsB = convertToSeconds(timeB);
        return secondsA - secondsB;
    };
    // Fonction pour convertir un temps (au format hh:mm:ss) en secondes
    const convertToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };
    
    //Fait pour les 3, mais devrait être fait pour CHAQUE quête  
    const sortedPlayers1 = sortPlayersByScore('score1');
    const sortedPlayers2 = sortPlayersByScore('score2');
    const sortedPlayers3 = sortPlayersByScore('score3');


    
    // État pour suivre la quête actuellement sélectionnée
    const [selectedQuestId, setSelectedQuestId] = useState(null);
    // Fonction pour changer la quête actuellement sélectionnée
    const handleQuestChange = (index) => {
        const selectedQuest = quests[index];
        setSelectedQuestId(selectedQuest.id);
    };

    

    // Sélectionnez le tableau à afficher en fonction de la quête sélectionnée
    let rankingTable = [];
    if (selectedQuestId === 1) {
        rankingTable = sortPlayersByScore('score1');
    } else if (selectedQuestId === 2) {
        rankingTable = sortPlayersByScore('score2');
    } else if (selectedQuestId === 3) {
        rankingTable = sortPlayersByScore('score3');
    }






  return (
    <SafeAreaView style={styles.container}>
        <Navbar />
        <Text style={styles.title}>Classement des joueurs :</Text>
        <ModalDropdown 
            options={quests.map((quest) => quest.title)}
            defaultValue="Sélectionne une quête ▼"
            onSelect={(index) => handleQuestChange(index)}
            textStyle={{color:"#eab308", fontSize: 16, fontFamily:"Baskerville"}}
            dropdownStyle={{backgroundColor:'#1e1b4b', borderColor: '#eab308'}}
            dropdownTextStyle={{backgroundColor:'#1e1b4b',color:"#eab308", fontFamily:"Baskerville", fontSize:12}}
            />
        <Text style={styles.title2}>weekly | monthly | all time</Text>


        <View style={styles.table}>
            <View style={styles.tableContent}>
                <Text style={styles.tableContent}>Rang</Text>
                <Text style={styles.tableContent}>Joueur</Text>
                <Text style={styles.tableContent}>Score</Text>
            </View>
            <FlatList
                data={rankingTable}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.tableContent}>
                    <Text style={styles.tableContent}>{index + 1}</Text>
                    <Text style={styles.tableContent}>{item.Username}</Text>
                    <Text style={styles.tableContent}>{item[`score${selectedQuestId}`]}</Text>
                </View>
                )}
                />
        </View>

    

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
    border: 1,
    borderBlockColor: '#eab308',
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

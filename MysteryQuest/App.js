import React from "react";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font';

import Home from "./pages/Home";
import Test from "./pages/Test";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import QuestRewardingPage from "./pages/QuestRewardingPage";
import QuestStartPage from "./pages/QuestStartPage";
import QuestStepPage from "./pages/QuestStepPage";
import QuestSuccessPage from "./pages/QuestSuccessPage";
import RankingPage from "./pages/RankingPage";
import RulesPage from "./pages/RulesPage";
import TrophyPage from "./pages/TrophyPage";
import Menu from "./components/Menu";
import Timer from "./components/Timer";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Mystery': require('./assets/fonts/MysteryQuest-Regular.ttf'),
    'Baskerville': require('./assets/fonts/LibreBaskerville-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <LinearGradient 
        colors={['#0c0a09', '#4338ca']} 
        style={{height:'100%', justifyContent:'center'}} 
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/ProfilePage" element={<ProfilePage/>} />
          <Route path="/QuestRewardingPage" element={<QuestRewardingPage/>} />
          <Route path="/QuestStartPage" element={<QuestStartPage/>} />
          <Route path="/QuestStepPage" element={<QuestStepPage/>} />
          <Route path="/QuestSuccessPage" element={<QuestSuccessPage/>} />
          <Route path="/RankingPage" element={<RankingPage/>} />
          <Route path="/RulesPage" element={<RulesPage/>} />
          <Route path="/TrophyPage" element={<TrophyPage/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Timer" element={<Timer/>} /> {/* à supprimer plus tard */}
        </Routes>
      </LinearGradient>
    </NativeRouter>
  );
}



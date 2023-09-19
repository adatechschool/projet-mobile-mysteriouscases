import React, { useEffect } from "react";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

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
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import Navbar from "./components/Navbar";
import SettingPage from "./pages/SettingsPage";
import EditUsername from "./pages/EditUsername";
import EditPassword from "./pages/EditPassword";

export default function App() {
  const [fontsLoaded] = useFonts({
    Mystery: require("./assets/fonts/MysteryQuest-Regular.ttf"),
    Baskerville: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <LinearGradient
        colors={["#0c0a09", "#4338ca"]}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/ProfilePage" element={<ProfilePage/>} />
          <Route path="/QuestRewardingPage" element={<QuestRewardingPage/>} />
          <Route path="/QuestStartPage/:id" element={<QuestStartPage/>} />
          <Route path="/QuestStepPage/:questId/:step" element={<QuestStepPage/>} />
          <Route path="/QuestSuccessPage" element={<QuestSuccessPage/>} />
          <Route path="/RankingPage" element={<RankingPage/>} />
          <Route path="/RulesPage" element={<RulesPage/>} />
          <Route path="/TrophyPage" element={<TrophyPage/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/SettingPage" element={<SettingPage/>} />
          <Route path="/EditUsername" element={<EditUsername />} />
          <Route path="/EditPassword" element={<EditPassword />} />
        </Routes>
      </LinearGradient>
    </NativeRouter>
  );
}

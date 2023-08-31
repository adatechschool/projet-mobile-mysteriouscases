import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Home from "./pages/Home";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Test from "./pages/Test";
import { LinearGradient } from "expo-linear-gradient";
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

export default function App() {
  return (
    <NativeRouter>
      <LinearGradient
        colors={["#0c0a09", "#4338ca"]}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <SafeAreaView>
          {/* Header */}
          <Link to="/home">
            <Text>Home</Text>
          </Link>
          <Link to="/test">
            <Text>Test</Text>
          </Link>
          <Link to="/homepage">
            <Text>HomePage</Text>
          </Link>
        </SafeAreaView>
        <View style={styles.content}>
          {/* Routes */}

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route
              path="/QuestRewardingPage"
              element={<QuestRewardingPage />}
            />
            <Route path="/QuestStartPage" element={<QuestStartPage />} />
            <Route path="/QuestStepPage" element={<QuestStepPage />} />
            <Route path="/QuestSuccessPage" element={<QuestSuccessPage />} />
            <Route path="/RankingPage" element={<RankingPage />} />
            <Route path="/RulesPage" element={<RulesPage />} />
            <Route path="/TrophyPage" element={<TrophyPage />} />
          </Routes>
        </View>
      </LinearGradient>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'transparent',
    // background: 'linear-gradient(45deg, #FF0000, #00FF00)',
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

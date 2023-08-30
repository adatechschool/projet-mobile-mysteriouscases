import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Home from "./pages/Home";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Test from "./pages/Test";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <NativeRouter>
      <LinearGradient 
        colors={['#0c0a09', '#4338ca']} 
        style={{height:'100%', justifyContent:'center'}} 
      >
        <View>
          {/* Header */}
          <Link to="/home">
            <Text>Home</Text>
          </Link>
          <Link to="/test">
            <Text>Test</Text>
          </Link>
        </View>
        <View style={styles.content}>
          {/* Routes */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
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

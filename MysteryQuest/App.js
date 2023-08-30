import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Home from "./Home";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Test from "./Test";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

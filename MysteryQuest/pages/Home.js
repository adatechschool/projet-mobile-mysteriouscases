import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MysteryQuest Regular'
  }
})

function Home() {
  return (
    <View>
      <Text style={styles.text}>hellooo</Text>
    </View>
  );
}

export default Home;

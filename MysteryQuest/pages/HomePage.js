import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Item,
  SectionList,
  StyleSheet,
  Button,
} from "react-native";

const HomePage = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Quêtes disponibles : </Text>
      <FlatList
        data={[
          {
            key: "La Malette à Mamie",
            desc: "Explorez le quartier, résolvez des énigmes et découvrez les souvenirs cachés pour retrouver la malette perdue de Mamie.",
          },
          {
            key: "Où est Camille ?",
            desc: "Camille, la petite fille que tu devais garder a disparu. Retrouve-la rapidement avant que ses mamans rentrent du travail !",
          },
          {
            key: "Les Ailes d'Élara",
            desc: "Découvrez les mystères de Paris en aidant la fée Élara à retrouver des fragments magiques et à sauver l'équilibre entre les mondes.",
          },
        ]}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.key}</Text>
            <Text>{item.desc}</Text>
            <Button title="-->"></Button>
          </View>
        )}
        style={styles.container}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    textAlign: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center",
  },
  title: { fontSize: 35, textAlign: "center", paddingTop: 50 },
});

export default HomePage;

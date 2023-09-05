import { View } from "react-native";

const RulesPage = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 13,
    padding: 10,
  },
  blurryBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Opacité appliquée ici
    borderRadius: 25, // Appliquez la bordure au fond flou
    padding: 10, // Ajoutez un espacement autour du fond flou
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    lineHeight: 24,
    fontSize: 12,
    color: "#EAB308",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 20,
    fontFamily: "Mystery",
    color: "#EAB308",
  },
});

export default RulesPage;

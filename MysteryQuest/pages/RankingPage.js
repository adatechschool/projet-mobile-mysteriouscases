import { View } from "react-native";

const RankingPage = () => {
  return <View></View>;
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
    borderColor: "#eab308", // Couleur de la bordure
    backgroundColor: "rgba(0,0,0,0.2)", // Couleur de fond légèrement transparente
    padding: 10,
  },
  tableContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

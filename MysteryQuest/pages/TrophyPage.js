import { View } from "react-native";

const TrophyPage = () => {
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
  unlockedItemTitle: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Mystery",
    color: "rgba(234,179,8,0.2)",
  },
  desc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    color: "#EAB308",
  },
  unlockedDesc: {
    fontFamily: "Baskerville",
    textAlign: "justify",
    fontSize: 16,
    color: "rgba(234,179,8,0.2)",
  },
  title: {
    fontSize: 35,
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

export default TrophyPage;

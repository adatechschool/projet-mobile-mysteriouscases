import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import Navbar from "../components/Navbar";
import Svg, { G, Path } from "react-native-svg";
import { useState } from "react";

const ProfilePage = () => {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user);
  const handleEditUsername = () => {
    setIsEditingUsername(true);
  };
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState(password);
  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  const [user, setUser] = useState("nom-user");
  const [password, setPassword] = useState('******')
  const profilPic = (
    <Svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 12.8889C10.125 12.8889 11.0813 12.5 11.8688 11.7222C12.6563 10.9444 13.05 10 13.05 8.88889C13.05 7.77778 12.6563 6.83333 11.8688 6.05556C11.0813 5.27778 10.125 4.88889 9 4.88889C7.875 4.88889 6.91875 5.27778 6.13125 6.05556C5.34375 6.83333 4.95 7.77778 4.95 8.88889C4.95 10 5.34375 10.9444 6.13125 11.7222C6.91875 12.5 7.875 12.8889 9 12.8889ZM9 11.1111C8.37 11.1111 7.8375 10.8963 7.4025 10.4667C6.9675 10.037 6.75 9.51111 6.75 8.88889C6.75 8.26667 6.9675 7.74074 7.4025 7.31111C7.8375 6.88148 8.37 6.66667 9 6.66667C9.63 6.66667 10.1625 6.88148 10.5975 7.31111C11.0325 7.74074 11.25 8.26667 11.25 8.88889C11.25 9.51111 11.0325 10.037 10.5975 10.4667C10.1625 10.8963 9.63 11.1111 9 11.1111ZM1.8 16C1.305 16 0.88125 15.8259 0.52875 15.4778C0.17625 15.1296 0 14.7111 0 14.2222V3.55556C0 3.06667 0.17625 2.64815 0.52875 2.3C0.88125 1.95185 1.305 1.77778 1.8 1.77778H4.635L6.3 0H11.7L13.365 1.77778H16.2C16.695 1.77778 17.1188 1.95185 17.4713 2.3C17.8238 2.64815 18 3.06667 18 3.55556V14.2222C18 14.7111 17.8238 15.1296 17.4713 15.4778C17.1188 15.8259 16.695 16 16.2 16H1.8ZM1.8 14.2222H16.2V3.55556H12.555L10.9125 1.77778H7.0875L5.445 3.55556H1.8V14.2222Z"
        fill="#1E1B4B"
      />
    </Svg>
  );
  const pen = (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 16.25H3.4L12.025 7.625L10.625 6.225L2 14.85V16.25ZM16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3042 0 14.8625 0C15.4208 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.82083 18.275 3.3625C18.2917 3.90417 18.1083 4.36667 17.725 4.75L16.3 6.175ZM14.85 7.65L4.25 18.25H0V14L10.6 3.4L14.85 7.65ZM11.325 6.925L10.625 6.225L12.025 7.625L11.325 6.925Z"
        fill="#EAB308"
      />
    </Svg>
  );
  const logOut = (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
        fill="#EAB308"
      />
    </Svg>
  );
  const supp = (
    <Svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.4 9L15 7.6L17.075 5.5L15 3.425L16.4 2L18.5 4.1L20.575 2L22 3.425L19.9 5.5L22 7.6L20.575 9L18.5 6.925L16.4 9ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
        fill="#EAB308"
      />
    </Svg>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView>
        <Navbar />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Mystery", fontSize: 35, color: "#EAB308" }}>
          Profil
        </Text>
        <View style={styles.profilPicContainer}>
          <Image
            style={styles.profilPic}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <TouchableOpacity style={styles.profilPicBg}>
            <View style={styles.profilPicSvg}>{profilPic}</View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          {isEditingUsername ? (
            <>
              <Text style={styles.label}>Nom d'utilisateur :</Text>
              <TextInput
                style={{ fontFamily: "Baskerville", color: "#EAB308" }}
                onChangeText={(text) => setEditedUsername(text)}
                value={editedUsername}
                autoFocus={true}
                onBlur={() => setIsEditingUsername(false)}
                onSubmitEditing={() => {
                  // Ajoutez ici la logique pour enregistrer le nouveau nom d'utilisateur.
                  // Par exemple, en utilisant une API ou en mettant à jour votre état global si vous en avez un.
                  // Une fois le nouveau nom d'utilisateur enregistré, vous pouvez exécuter :
                  setUser(editedUsername);
                  setIsEditingUsername(false);
                }}
              />
            </>
          ) : (
            <>
              <Text style={styles.label}>Nom d'utilisateur :</Text>
              <Text style={{ fontFamily: "Baskerville", color: "#EAB308" }}>
                {user}
              </Text>
              <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
                {pen}
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.line}>
          {isEditingPassword ? (
            <>
              <Text style={styles.label}>Mot de passe :</Text>
              <TextInput
                style={{ fontFamily: "Baskerville", color: "#EAB308" }}
                onChangeText={(text) => setEditedPassword(text)}
                value={editedPassword}
                autoFocus={true}
                onBlur={() => setIsEditingPassword(false)}
                onSubmitEditing={() => {
                  // Ajoutez ici la logique pour enregistrer le nouveau nom d'utilisateur.
                  // Par exemple, en utilisant une API ou en mettant à jour votre état global si vous en avez un.
                  // Une fois le nouveau nom d'utilisateur enregistré, vous pouvez exécuter :
                  setPassword(editedPassword);
                  setIsEditingPassword(false);
                }}
              />
            </>
          ) : (
            <>
              <Text style={styles.label}>Mot de passe :</Text>
              <Text style={{ fontFamily: "Baskerville", color: "#EAB308" }}>
                {password}
              </Text>
              <TouchableOpacity onPress={() => setIsEditingPassword(true)}>
                {pen}
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Se déconnecter</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>{logOut}</TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Supprimer le compte</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>{supp}</TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    rowGap: 8,
  },
  label: {
    flex: 1,
    fontFamily: "Baskerville",
    color: "#EAB308",
    marginLeft: 75,
    marginTop: 11,
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 200,
    alignItems: "",
    justifyContent: "center",
    marginRight: 33,
  },
  line: {
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Baskerville",
    alignItems: "center",
    color: "#EAB308",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    marginBottom: -8,
    paddingBottom: 6,
    marginHorizontal: 4,
    borderRadius: 1,
  },
  profilPic: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  profilPicBg: {
    width: 25,
    height: 25,
    borderRadius: 200,
    backgroundColor: "#EAB308",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profilPicSvg: {
    top: 3.5,
    left: 3,
  },
});

export default ProfilePage;

import { View, Alert, Text, Button } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const QuestStartPage = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Please grant location permissions.");
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      });

      setLocation(currentLocation);
      console.log("Location:", currentLocation);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <Button title="Get Location" onPress={getLocation}></Button>
      {location && (
        <Text>
          Latitude: {location.coords.latitude}, Longitude:
          {location.coords.longitude}''
        </Text>
      )}
    </View>
  );
};

export default QuestStartPage;

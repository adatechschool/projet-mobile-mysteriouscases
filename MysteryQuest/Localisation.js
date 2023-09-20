const [location, setLocation] = useState(null);
const [userLatitude, setUserLatitude] = useState(null);
const [userLongitude, setUserLongitude] = useState(null);
const [questLatitude, setQuestLatitude] = useState(null);
const [questLongitude, setQuestLongitude] = useState(null);
const user = {
  latitude: 4448.950845,
  longitude: 2.460539,
};
const goal = {
  latitude: 48.95038,
  longitude: 2.460308,
};

const thresholdGoal = 0.0002; //écart pour lequel on considère que c'est bon
const thresholdNearGoal = 0.0005; //écart pour lequel on considère que c'est proche
const thresholdBeyondGoal = 0.1; //écart pour lequel on considère que c'est trop loin

function isLocationWithinThreshold(
  userLatitude,
  userLongitude,
  questLatitude,
  questLongitude,
  threshold
) {
  const latDifference = Math.abs(userLatitude - questLatitude);
  const lonDifference = Math.abs(userLongitude - questLongitude);

  return latDifference <= threshold && lonDifference <= threshold;
}

const userLocation = {
  latitude: 4448.950845,
  longitude: 2.460539,
};
const goalLocation = {
  latitude: 48.95038,
  longitude: 2.460308,
};

if (
  isLocationWithinThreshold(
    userLocation.latitude,
    userLocation.longitude,
    goalLocation.latitude,
    goalLocation.longitude,
    thresholdGoal
  )
) {
  console.log("L'utilisateur a gagné !");
} else if (
  isLocationWithinThreshold(
    userLocation.latitude,
    userLocation.longitude,
    goalLocation.latitude,
    goalLocation.longitude,
    thresholdNearGoal
  )
) {
  console.log("L'utilisateur est proche du but.");
} else if (
  isLocationWithinThreshold(
    userLocation.latitude,
    userLocation.longitude,
    goalLocation.latitude,
    goalLocation.longitude,
    thresholdBeyondGoal
  )
) {
  console.log("L'utilisateur est au-delà du but.");
} else {
  console.log("Utilisateur hors sujet");
}

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
    console.log(error.message);
  }
};

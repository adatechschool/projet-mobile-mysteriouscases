const [location, setLocation] = useState(null);
const [userLatitude, setUserLatitude] = useState(null);
const [userLongitude, setUserLongitude] = useState(null);
const [questLatitude, setQuestLatitude] = useState(null);
const [questLongitude, setQuestLongitude] = useState(null);
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

const thresholdGoal = 0.0002;
const thresholdNearGoal = 0.0005;
const thresholdBeyondGoal = 0.1;

if (
  isLocationWithinThreshold(
    userLatitude,
    userLongitude,
    questLatitude,
    questLongitude,
    thresholdGoal
  )
) {
  console.log("L'utilisateur a gagné !");
} else if (
  isLocationWithinThreshold(
    userLatitude,
    userLongitude,
    questLatitude,
    questLongitude,
    thresholdNearGoal
  )
) {
  console.log("L'utilisateur est proche du but.");
} else if (
  isLocationWithinThreshold(
    userLatitude,
    userLongitude,
    questLatitude,
    questLongitude,
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

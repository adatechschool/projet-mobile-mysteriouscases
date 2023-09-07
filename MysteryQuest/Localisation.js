function isLocationWithinThreshold(lat1, lon1, lat2, lon2, threshold) {
  const latDifference = Math.abs(lat1 - lat2);
  const lonDifference = Math.abs(lon1 - lon2);

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

const thresholdGoal = 0.0002;
const thresholdNearGoal = 0.0005;
const thresholdBeyondGoal = 0.1;

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

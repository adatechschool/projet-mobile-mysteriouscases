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


function isLocationWithinThreshold(lat1, lon1, lat2, lon2, threshold) {
  const latDifference = Math.abs(lat1 - lat2);
  const lonDifference = Math.abs(lon1 - lon2);

  return latDifference <= threshold && lonDifference <= threshold;
}



if (
  isLocationWithinThreshold(
    user.latitude,
    user.longitude,
    goal.latitude,
    goal.longitude,
    thresholdGoal
  )
) {
  console.log("L'utilisateur a gagné !");
} else if (
  isLocationWithinThreshold(
    user.latitude,
    user.longitude,
    goal.latitude,
    goal.longitude,
    thresholdNearGoal
  )
) {
  console.log("L'utilisateur est proche du but.");
} else if (
  isLocationWithinThreshold(
    user.latitude,
    user.longitude,
    goal.latitude,
    goal.longitude,
    thresholdBeyondGoal
  )
) {
  console.log("L'utilisateur est au-delà du but.");
} else {
  console.log("Utilisateur hors sujet");
}

import Geolocation from "@react-native-community/geolocation";

const handleLocation = (callback) => {
  Geolocation.getCurrentPosition(
    (position) => {
      callback(position);
    },
    (error) => {
      console.error("Geolocation Error:", error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

export default handleLocation;

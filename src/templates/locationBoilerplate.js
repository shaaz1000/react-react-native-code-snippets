import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const LocationBoilerplate = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        console.error("Geolocation Error:", error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={getLocation} />
      {location && (
        <Text style={styles.text}>
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
  },
});

export default LocationBoilerplate;

import React from "react";
import { View, Button, StyleSheet } from "react-native";
import analytics from "@react-native-firebase/analytics";

const FirebaseAnalyticsBoilerplate = () => {
  const logEvent = async () => {
    try {
      await analytics().logEvent("sample_event", {
        item: "Sample Item",
        description: "This is a sample event",
      });
      console.log("Event logged successfully");
    } catch (error) {
      console.error("Firebase Analytics Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Log Event" onPress={logEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FirebaseAnalyticsBoilerplate;

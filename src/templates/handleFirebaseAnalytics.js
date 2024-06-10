import analytics from "@react-native-firebase/analytics";

const logEvent = async (eventName, params) => {
  try {
    await analytics().logEvent(eventName, params);
    console.log("Event logged successfully");
  } catch (error) {
    console.error("Firebase Analytics Error:", error);
  }
};

export default logEvent;

import { Linking, Alert } from "react-native";

const handleWebsiteLink = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Error", "Invalid URL");
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("Error:", err));
};

export default handleWebsiteLink;

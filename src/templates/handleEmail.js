import { Linking, Alert } from "react-native";

const handleEmail = (email) => {
  const url = `mailto:${email}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Error", "Invalid email address");
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("Error:", err));
};

export default handleEmail;

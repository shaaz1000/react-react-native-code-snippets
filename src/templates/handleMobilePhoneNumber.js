import { Linking, Alert } from "react-native";

const handleMobilePhoneNumber = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Error", "Invalid phone number");
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("Error:", err));
};

export default handleMobilePhoneNumber;

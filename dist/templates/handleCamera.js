import { launchCamera } from "react-native-image-picker";

const handleCamera = (options, callback) => {
  launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log("User cancelled camera");
    } else if (response.error) {
      console.log("Camera Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      const source = { uri: response.uri };
      callback(source);
    }
  });
};

export default handleCamera;

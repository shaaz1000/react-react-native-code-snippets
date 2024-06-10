import { launchImageLibrary } from "react-native-image-picker";

const handleVideoPicker = (options, callback) => {
  launchImageLibrary({ mediaType: "video", ...options }, (response) => {
    if (response.didCancel) {
      console.log("User cancelled video picker");
    } else if (response.error) {
      console.log("VideoPicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      const source = { uri: response.uri };
      callback(source);
    }
  });
};

export default handleVideoPicker;

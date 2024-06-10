import React, { useState } from "react";
import { View, Button, Video, StyleSheet } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const VideoPickerBoilerplate = () => {
  const [videoUri, setVideoUri] = useState(null);

  const pickVideo = () => {
    const options = {
      mediaType: "video",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled video picker");
      } else if (response.error) {
        console.log("VideoPicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setVideoUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick a Video" onPress={pickVideo} />
      {videoUri && <Video source={{ uri: videoUri }} style={styles.video} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default VideoPickerBoilerplate;

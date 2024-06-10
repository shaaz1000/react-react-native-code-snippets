import React from "react";
import { SvgXml } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const svgXmlData = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="blue" />
</svg>
`;

const SvgXmlImage = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={svgXmlData} width="100%" height="100%" />
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

export default SvgXmlImage;

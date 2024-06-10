import React, { useRef } from "react";
import { View, Animated, Button } from "react-native";

const ReactNativeAnimations = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

export default ReactNativeAnimations;

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  label: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Button;

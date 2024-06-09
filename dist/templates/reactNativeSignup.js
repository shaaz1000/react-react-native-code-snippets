import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Handle signup logic here
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Text>Confirm Password:</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSubmit} />
    </View>
  );
};

export default Signup;

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle login logic here
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
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default Login;

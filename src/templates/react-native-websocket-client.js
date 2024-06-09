import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const ws = new WebSocket("ws://localhost:8080");

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <View>
      <Text>WebSocket Messages</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default WebSocketComponent;

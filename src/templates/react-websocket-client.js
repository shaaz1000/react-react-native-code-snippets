import React, { useEffect, useState } from "react";

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
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const Notification = () => {
  const [connectionState, setConnectionState] = useState("Connecting...");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher("bb224a14eb5d465cdf28", {
      cluster: "ap1",
      forceTLS: true,
      enableStats: false,
    });

    pusher.connection.bind("state_change", (states) => {
      console.log("State change:", states);
      setConnectionState(states.current);
    });

    pusher.connection.bind("connected", () => {
      console.log("Connected to Pusher!");
    });

    pusher.connection.bind("disconnected", () => {
      console.warn("⚠️ Pusher DISCONNECTED");
    });

    pusher.connection.bind("error", (err) => {
      console.error("Pusher ERROR:", err);
    });

    const channel = pusher.subscribe("general-notifications");

    channel.bind("GeneralNotification", (data) => {
      if (data?.message) {
        setMessages((prev) => [...prev, data.message]);
      }
    });

    return () => {
      pusher.disconnect();
      console.log("Disconnected Pusher");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔔 Notification </h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}> {msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;

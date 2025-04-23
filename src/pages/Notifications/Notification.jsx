import React, { useEffect, useState } from "react";

const Notification = () => {
  const [connectionState, setConnectionState] = useState("Connecting...");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem('auth-storage'))
    // console.log(authState);
    const token = authState?.state?.token;
    // console.log(token);
    const eventSource = new EventSource(
      `http://localhost:8000/api/v1/auth/sse-notifications?token=${encodeURIComponent(token)}`
    );

    eventSource.onopen = () => {
      console.log("Connected to SSE!"); 
      setConnectionState("Connected");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data?.message) {
          setMessages((prev) => [...prev, data.message]);
        }
      } catch (err) {
        console.error("Error parsing SSE message:", err);
      }
    };

    // Handle errors
    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      setConnectionState("Disconnected");
    };

    // Cleanup on component unmount
    return () => {
      eventSource.close();
      console.log("Disconnected SSE");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔔 Notification ({connectionState})</h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;

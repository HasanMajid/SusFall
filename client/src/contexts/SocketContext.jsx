import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();
const env = process.env.NODE_ENV || "development";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  console.log("running in", env);

  useEffect(() => {
    // Create the Socket.IO client and connect to the server
    const newSocket = io(env === "development" ? "http://localhost:3000" : "https://susfall-server.onrender.com");

    // Set up any event listeners that you need
    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    // Store the Socket.IO client in state
    setSocket(newSocket);

    // Clean up the Socket.IO client when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {socket ? children : null}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };

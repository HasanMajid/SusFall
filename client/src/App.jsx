import React, { useContext } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./screens/Home";
import Messages from "./screens/Messages";
import Tutorial from "./screens/Tutorial";
import Game from "./screens/Game";

import { SocketProvider } from "./contexts/SocketContext";

const App = () => {
  return (
    <>
      <Router>
        <SocketProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/game/:room" element={<Game />} />
            </Routes>
          </Layout>
        </SocketProvider>
      </Router>
    </>
  );
};

export default App;

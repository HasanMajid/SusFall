import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Messages from "./screens/Messages";
import Tutorial from "./screens/Tutorial";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

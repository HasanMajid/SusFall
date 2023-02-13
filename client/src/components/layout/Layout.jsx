import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;

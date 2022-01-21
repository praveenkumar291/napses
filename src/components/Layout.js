import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;

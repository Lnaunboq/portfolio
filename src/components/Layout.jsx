import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

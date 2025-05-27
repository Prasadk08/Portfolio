import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mtformedia" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

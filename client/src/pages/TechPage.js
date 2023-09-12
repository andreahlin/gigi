import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import './Global.css'

export default function TechPage() {
  return (
    <div className="desktop">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
import React from "react";
import Header from "../components/Header"
import { Outlet  } from "react-router-dom";
import './Global.css'

export default function HomePage() {
return (
      <div className="desktop">
      <Header/>
      <Outlet  />
      </div>
    );
}
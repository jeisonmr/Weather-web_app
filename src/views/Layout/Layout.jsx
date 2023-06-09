import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "../../components/NavBar/Nav";
import { Calendario } from "../Calendar/Calendario";
import { Dashboard } from "../Dashboard/Dashboard";
import { Historial } from "../History/Historial";

// import '/src/styles/css/main.css';
import './layout.css';

export const Layout = () => {
  return (
    <Router>
      <section className={"layoutContainer"}>
        <div className="layout__navBar">
        <Nav />
        </div>
        <main className="layout__views">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/calendario" element={<Calendario />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
};

import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import ServiceDetail from "./pages/ServiceDetail";

function Home() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:serviceId" element={<><Header /><ServiceDetail /></>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

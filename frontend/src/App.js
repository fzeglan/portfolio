import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";

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
      </Routes>
    </HashRouter>
  );
}

export default App;

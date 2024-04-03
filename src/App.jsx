import "./App.css";
import { useState, useEffect } from "react";
import ArthurW from "./ARTHURS-WHITE.svg";
import PortfolioTitleW from "./PORTFOLIO-WHITE.svg";

function App() {
  return (
    <div>
      <header>
        <div className="cube-container">
          <div className="cube">
            <div className="front">ArtHur</div>
            <div className="back">ArtHur</div>
            <div className="top">poRtfolio</div>
            <div className="bottom">poRtfolio</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <header>
        <div className="topHeader"></div>
        <div className="cube-container">
          <div className="cube1">
            <div className="front">ArtHur</div>
            <div className="back">ArtHur</div>
            <div className="top">poRtfolio</div>
            <div className="bottom">poRtfolio</div>
          </div>
        </div>
        <div className="scrollDown">
          <div className="cube-scroll">
            <div className="cube">
              <div className="front"></div>
              <div className="back"></div>
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="right"></div>
              <div className="left"></div>
              <i class="fa-solid fa-arrow-down arrow"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import "./App.scss";
import { useState, useEffect, useRef } from "react";

function App() {
  const workSectionRef = useRef(null);
  useEffect(() => {}, []);
  const handleScrollToWork = () => {
    workSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Body">
      <div className="sticky-bar">
        <p>1</p>
        <span></span>
        <p>5</p>
      </div>
      <header>
        <div className="right-menu">
          <a>MAIL</a>
          <span></span>
          <a>GITHUB</a>
          <span></span>
          <a>INSTAGRAM</a>
        </div>
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
          <div className="cube-scroll" onClick={handleScrollToWork}>
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
      <section className="WorkSection" ref={workSectionRef} id="work"></section>
    </div>
  );
}

export default App;

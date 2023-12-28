import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [bOpen, setBOpen] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);
  const [topMenuHeight, settopMenuHeight] = useState("0");

  const handleMouseEnter = (event) => {
    if (bOpen) {
      if (event.target.children[0]) {
        setLineWidth(event.target.children[0].offsetWidth);
        setLineLeft(event.target.children[0].offsetLeft);
      } else {
        const { offsetWidth, offsetLeft } = event.target;
        setLineWidth(offsetWidth);
        setLineLeft(offsetLeft);
      }
    }
  };

  const hideLine = () => {
    setLineWidth(0);
  };

  const burgerClicked = function () {
    bOpen ? settopMenuHeight("0vh") : settopMenuHeight("40vh");
    setBOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header className="content">
        <div className="top-menu" style={{ height: topMenuHeight }}>
          <nav
            className={`navbar ${bOpen ? "open" : ""}`}
            onMouseLeave={hideLine}
          >
            <div
              id="line"
              className="nav_line"
              style={{ width: lineWidth, left: lineLeft }}
            ></div>
            <a
              href="#"
              id="test"
              className="link"
              onMouseEnter={handleMouseEnter}
            >
              <p
                className={`link-text ${bOpen ? "open" : ""}`}
                style={
                  bOpen
                    ? { transitionDelay: "1.3s" }
                    : { transitionDelay: "0.2s" }
                }
              >
                Accueil
              </p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p
                id="linkeaa"
                className={`link-text ${bOpen ? "open" : ""}`}
                style={
                  bOpen
                    ? { transitionDelay: "1.6s" }
                    : { transitionDelay: "0.2s" }
                }
              >
                Profil
              </p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p
                className={`link-text ${bOpen ? "open" : ""}`}
                style={
                  bOpen
                    ? { transitionDelay: "1.9s" }
                    : { transitionDelay: "0.2s" }
                }
              >
                Productions
              </p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p
                className={`link-text ${bOpen ? "open" : ""}`}
                style={
                  bOpen
                    ? { transitionDelay: "2.2s" }
                    : { transitionDelay: "0.2s" }
                }
              >
                Contact
              </p>
            </a>
          </nav>
        </div>

        <div className="top-content">
          <div className="burgerMenu" onClick={burgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="title-page">
          <h1>
            <p className="toto">Arthur's</p>
            Portfolio
          </h1>
        </div>
      </header>
      <div className="content2"></div>
    </div>
  );
}

export default App;

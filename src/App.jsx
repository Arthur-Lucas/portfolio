import "./App.css";
import { useState, useEffect, useRef } from "react";
import ArthurW from "./ARTHURS-WHITE.svg";
import PortfolioTitleW from "./PORTFOLIO-WHITE.svg";
import gsap from "gsap";
// import useGsap

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

  const handlePortfolioMouseEnter = (event) => {
    console.log(event);
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
              <p className="link-text">Accueil</p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p id="linkeaa" className="link-text">
                Profil
              </p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p className="link-text">Productions</p>
            </a>
            <a href="#" className="link" onMouseEnter={handleMouseEnter}>
              <p className="link-text">Contact</p>
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
          {/* <h1>Arthur's</h1> */}
          <img
            className="arthur-title"
            src={ArthurW}
            alt="Arthur's portfolio"
          ></img>
          <svg
            id="Calque_1"
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1913.11 436.32"
          >
            <path
              id="letter-P"
              d="M0,6.06h98.17c33.12,0,57.97,8.89,74.54,26.66,16.56,17.78,24.85,43.84,24.85,78.17v41.81c0,34.34-8.29,60.4-24.85,78.17-16.57,17.78-41.42,26.66-74.54,26.66h-31.51v172.71H0V6.06ZM98.17,196.95c10.91,0,19.09-3.03,24.54-9.09s8.18-16.36,8.18-30.91v-50.3c0-14.54-2.73-24.85-8.18-30.91-5.45-6.06-13.64-9.09-24.54-9.09h-31.51v130.29h31.51Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-O1"
              d="M255.12,408.44c-17.38-18.58-26.06-44.84-26.06-78.78V106.66c0-33.94,8.68-60.19,26.06-78.78C272.48,9.3,297.54,0,330.26,0s57.77,9.3,75.14,27.88c17.37,18.59,26.06,44.84,26.06,78.78v223.01c0,33.94-8.69,60.2-26.06,78.78-17.38,18.59-42.42,27.88-75.14,27.88s-57.78-9.29-75.14-27.88ZM364.8,333.91V102.41c0-27.88-11.51-41.81-34.54-41.81s-34.54,13.94-34.54,41.81v231.49c0,27.88,11.51,41.81,34.54,41.81s34.54-13.94,34.54-41.81Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-R"
              d="M476.3,6.06h98.78c34.33,0,59.39,7.98,75.14,23.94,15.76,15.96,23.63,40.51,23.63,73.63v26.06c0,44.04-14.54,71.92-43.63,83.63v1.21c16.15,4.85,27.57,14.75,34.24,29.69,6.67,14.95,10,34.95,10,59.99v74.54c0,12.12.4,21.92,1.21,29.39.8,7.48,2.82,14.85,6.06,22.12h-67.87c-2.42-6.87-4.04-13.33-4.85-19.39-.81-6.06-1.21-16.97-1.21-32.72v-77.57c0-19.39-3.13-32.92-9.39-40.6-6.27-7.67-17.07-11.51-32.42-11.51h-23.03v181.8h-66.66V6.06ZM567.2,187.86c13.33,0,23.33-3.43,30-10.3,6.67-6.86,10-18.38,10-34.54v-32.72c0-15.35-2.73-26.46-8.18-33.33-5.45-6.87-14.04-10.3-25.75-10.3h-30.3v121.2h24.24Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-T"
              d="M771.43,66.66h-69.69V6.06h206.04v60.6h-69.69v363.6h-66.66V66.66Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-F"
              d="M939.89,6.06h176.35v60.6h-109.69v118.17h86.05v60.6h-86.05v184.83h-66.66V6.06Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-O2"
              d="M1169.56,408.44c-17.38-18.58-26.06-44.84-26.06-78.78V106.66c0-33.94,8.68-60.19,26.06-78.78,17.37-18.58,42.42-27.88,75.14-27.88s57.77,9.3,75.14,27.88c17.37,18.59,26.06,44.84,26.06,78.78v223.01c0,33.94-8.69,60.2-26.06,78.78-17.38,18.59-42.42,27.88-75.14,27.88s-57.78-9.29-75.14-27.88ZM1279.25,333.91V102.41c0-27.88-11.51-41.81-34.54-41.81s-34.54,13.94-34.54,41.81v231.49c0,27.88,11.51,41.81,34.54,41.81s34.54-13.94,34.54-41.81Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-L"
              d="M1390.75,6.06h66.66v363.6h109.69v60.6h-176.35V6.06Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-I"
              d="M1599.21,6.06h66.66v424.2h-66.66V6.06Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
            <path
              id="letter-O3"
              d="M1736.76,408.44c-17.38-18.58-26.06-44.84-26.06-78.78V106.66c0-33.94,8.68-60.19,26.06-78.78,17.37-18.58,42.42-27.88,75.14-27.88s57.77,9.3,75.14,27.88c17.37,18.59,26.06,44.84,26.06,78.78v223.01c0,33.94-8.69,60.2-26.06,78.78-17.38,18.59-42.42,27.88-75.14,27.88s-57.78-9.29-75.14-27.88ZM1846.45,333.91V102.41c0-27.88-11.51-41.81-34.54-41.81s-34.54,13.94-34.54,41.81v231.49c0,27.88,11.51,41.81,34.54,41.81s34.54-13.94,34.54-41.81Z"
              style={{ fill: "#fff", strokewidth: 0 }}
              onMouseOver={handlePortfolioMouseEnter}
            />
          </svg>
          {/* <img src={PortfolioTitleW} alt="Arthur's portfolio"></img> */}
          <div></div>
        </div>
      </header>
      <div className="content2"></div>
    </div>
  );
}

export default App;

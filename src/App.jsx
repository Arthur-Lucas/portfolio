import "./App.scss";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

function App() {
  const workSectionRef = useRef(null);
  const indentNumberRef = useRef(null);
  const meSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    gsap.to(indentNumberRef.current, {
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "top center",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
      },

      duration: 3,
      text: "3",
      ease: "power1.out",
    });
    gsap.to(indentNumberRef.current, {
      scrollTrigger: {
        trigger: meSectionRef.current,
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "top center",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
      },

      duration: 3,
      text: "2",
      ease: "power1.out",
    });
  }, []);
  const handleScrollToWork = () => {
    meSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Body">
      <div className="sticky-bar">
        <p ref={indentNumberRef}>1</p>
        <span></span>
        <p>5</p>
      </div>
      <header>
        <div className="right-menu">
          <a href="mailto:arthurlucas92@orange.fr">MAIL</a>
          <span></span>
          <a target="_blank" href="https://github.com/Arthur-Lucas">
            GITHUB
          </a>
          <span></span>
          <a target="_blank" href="https://www.instagram.com/tutur_l/">
            INSTAGRAM
          </a>
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
              <i className="fa-solid fa-arrow-down arrow"></i>
            </div>
          </div>
        </div>
      </header>
      <section className="MeSection" ref={meSectionRef}></section>
      <section className="WorkSection" ref={workSectionRef} id="work"></section>
    </div>
  );
}

export default App;

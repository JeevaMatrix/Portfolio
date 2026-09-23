import React from "react";
import learnlia from "../assets/project-learnlia.png";
import inivayal from "../assets/project-inivayal.png";
import stockscope from "../assets/project-stockscope.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__row">
        <div className="hero__copy">
          <p className="hero__kicker">Jeeva Matrix · Web Development &amp; Digital Solutions</p>

          <h1 className="hero__headline">Ideas become real, working products.</h1>

          <p className="hero__sub">
            We build practical, modern websites and web applications for
            businesses — designed around what you actually need, not a
            template. Real products, already live.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn-primary hero__primary-cta">
              Start a Project →
            </a>
            <a href="#work" className="btn-text hero__secondary-cta">
              See what we've built
            </a>
          </div>
        </div>

        <div className="hero__stack" aria-hidden="true">
          <div className="hero__shot hero__shot--back">
            <img src={stockscope} alt="" />
          </div>
          <div className="hero__shot hero__shot--mid">
            <img src={inivayal} alt="" />
          </div>
          <div className="hero__shot hero__shot--front frame">
            <div className="frame__bar">
              <span />
              <span />
              <span />
              <span className="frame__url">learnlia.com</span>
            </div>
            <img src={learnlia} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

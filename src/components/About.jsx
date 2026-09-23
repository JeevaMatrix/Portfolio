import React from "react";
import profile from "../assets/jeeva-profile.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container about__row">
        <div className="about__photo">
          <img src={profile} alt="Jeevanandh R, founder of Jeeva Matrix" />
        </div>

        <div className="about__copy">
          <span className="kicker">About</span>
          <h2>Jeevanandh R — the builder behind Jeeva Matrix.</h2>

          <p>
            I'm Jeevanandh R, and Jeeva Matrix is the name I build under. I'm
            curious about how things actually work — whether that's a
            business website, a web application, or a processor built from
            scratch in Verilog.
          </p>
          <p>
            Most of my work is on the web: turning a business idea or
            problem into a working website or product. Alongside that, I
            work on VLSI, RTL and embedded systems, which shapes how I think
            about building things properly — precise, efficient, and built
            to actually work, not just to look finished.
          </p>
          <p>
            Jeeva Matrix is built around getting things done well, not
            around a fixed list of tools. If it helps solve the problem, we
            use it.
          </p>

          <div className="about__links">
            <a href="https://github.com/JeevaMatrix" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/jeevanandhr/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

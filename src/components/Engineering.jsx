import React from "react";
import { engineeringProjects, engineeringSkills, contactInfo } from "../data/content";
import floorplan from "../assets/eng-floorplan.png";
import waveform from "../assets/eng-waveform.png";
import "./Engineering.css";

export default function Engineering() {
  return (
    <section id="engineering" className="engineering">
      <div className="container">
        <div className="section-head">
          <span className="kicker kicker--circuit">Beyond the Web</span>
          <h2>Engineering</h2>
          <p>
            Alongside web development, I work on VLSI, RTL and embedded
            systems — with a focus on practical project development and
            technical guidance, from a single-cycle processor up to a small
            RISC-V system-on-chip.
          </p>
        </div>

        <div className="engineering__body">
          <div className="engineering__projects">
            {engineeringProjects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="eng-card">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="eng-card__link">View on GitHub ↗</span>
              </a>
            ))}
          </div>

          <aside className="engineering__side">
            <div className="eng-visual">
              <img src={floorplan} alt="FPGA device floorplan across multiple placement regions" />
              <span className="eng-visual__caption">FPGA floorplan — Xilinx Vivado</span>
            </div>
            <div className="eng-visual">
              <img src={waveform} alt="RTL simulation waveform of a hash core with round counter and hash-state registers" />
              <span className="eng-visual__caption">RTL simulation — hash core, round pipeline</span>
            </div>

            <h4>Working with</h4>
            <ul className="engineering__skills">
              {engineeringSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Explore Engineering →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

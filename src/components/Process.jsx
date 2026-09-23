import React from "react";
import { processSteps } from "../data/content";
import "./Process.css";

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-head">
          <span className="kicker">How We Work</span>
          <h2>You don't need to know technology. Just tell us what you want.</h2>
        </div>

        <ol className="process__list">
          {processSteps.map((step) => (
            <li key={step.number} className="process__step">
              <span className="process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

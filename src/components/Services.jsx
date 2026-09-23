import React from "react";
import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <span className="kicker">What I Build</span>
          <h2>Services built around your business, not our tech stack.</h2>
          <p>
            We work across the full range of what a modern business website
            or web product needs — you explain the problem, we handle the
            rest.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.id} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

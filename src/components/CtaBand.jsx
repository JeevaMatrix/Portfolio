import React from "react";
import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2>Have an idea? Let's build it.</h2>
        <p>
          Whether you need a business website, an online store, a custom web
          application or something completely specific to your workflow,
          let's talk about what you need.
        </p>
        <a href="#contact" className="btn btn-primary">
          Start a Project →
        </a>
      </div>
    </section>
  );
}

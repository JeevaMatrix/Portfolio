import React from "react";
import "./Why.css";

const usual = [
  "Start from a template, fit your business into it",
  "Weeks of back-and-forth before you see anything real",
  "One generic approach, reused for every client",
];

const ours = [
  "Built from your actual requirement — not a template",
  "AI-assisted development means faster drafts and more rounds of iteration, not shortcuts",
  "An engineering mindset from hardware design carries into how we build software — precise, and built to actually work",
];

export default function Why() {
  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-head">
          <span className="kicker">How We Build</span>
          <h2>We build fast because of how we work, not what we skip.</h2>
          <p>
            We use AI throughout development — for scaffolding, testing and
            speeding up iteration — but every product is designed, reviewed
            and finished by us. AI makes us faster; it doesn't replace
            understanding your business.
          </p>
        </div>

        <div className="why__split">
          <div className="why__col">
            <h4>The usual way</h4>
            <ul>
              {usual.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="why__divider" aria-hidden="true" />

          <div className="why__col why__col--highlight">
            <h4>How Jeeva Matrix builds</h4>
            <ul>
              {ours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

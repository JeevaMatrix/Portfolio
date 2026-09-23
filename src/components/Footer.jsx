import React from "react";
import { contactInfo } from "../data/content";
import "./Footer.css";

const columns = [
  {
    title: "Site",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Engineering", href: "#engineering" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: contactInfo.github },
      { label: "LinkedIn", href: contactInfo.linkedin },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <p className="footer__mark">
            Jeeva<span>Matrix</span>
          </p>
          <p className="footer__tag">Build something useful.</p>
        </div>

        <div className="footer__cols">
          {columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Jeeva Matrix. All rights reserved.</span>
        <span>Designed & Developed by Jeeva Matrix</span>
      </div>
    </footer>
  );
}

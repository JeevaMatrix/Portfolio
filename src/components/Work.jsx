import React, { useRef, useState } from "react";
import { projects } from "../data/content";
import learnliaShot from "../assets/project-learnlia.png";
import inivayalShot from "../assets/project-inivayal.png";
import stockscopeShot from "../assets/project-stockscope.png";
import "./Work.css";

const shots = {
  learnlia: { src: learnliaShot, url: "learnlia.com" },
  inivayal: { src: inivayalShot, url: "inivayal.in" },
  stockscope: { src: stockscopeShot, url: "stockscope · in development" },
};

export default function Work() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;

    for (let i = 0; i < projects.length; i++) {
      const card = cards[i];
      if (card) {
        const diff = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      }
    }
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Selected Work</span>
          <h2>Built for the real world.</h2>
          <p>
            No filler projects — these are live products and client sites
            we've actually built and shipped.
          </p>
        </div>

        <div className="work__grid" ref={sliderRef} onScroll={handleScroll}>
          {projects.map((p) => {
            const shot = p.image ? shots[p.image] : null;
            return (
              <article key={p.id} className={`work-card ${shot ? "work-card--has-shot" : ""}`}>
                {shot && (
                  <div className="frame work-card__frame">
                    <div className="frame__bar">
                      <span />
                      <span />
                      <span />
                      <span className="frame__url">{shot.url}</span>
                    </div>
                    <img className="frame__shot" src={shot.src} alt={`${p.name} screenshot`} />
                  </div>
                )}

                <div className="work-card__body">
                  <div className="work-card__top">
                    <span className="work-card__type">{p.type}</span>
                    {p.status && <span className="work-card__status">{p.status}</span>}
                  </div>

                  <h3>{p.name}</h3>
                  <p className="work-card__desc">{p.description}</p>
                  <p className="work-card__built">
                    <span>What we built —</span> {p.built}
                  </p>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost work-card__cta"
                    >
                      Visit Website ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="work__dots" role="tablist" aria-label="Project cards navigation">
          {projects.map((p, index) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to project ${index + 1}: ${p.name}`}
              className={`work__dot ${activeIndex === index ? "work__dot--active" : ""}`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { needOptions, timelineOptions, contactInfo } from "../data/content";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  business: "",
  need: "",
  budget: "",
  timeline: "",
  description: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.need) next.need = "Let me know what you're looking for.";
    if (!form.description.trim()) next.description = "A short description helps a lot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__row">
        <div className="contact__intro">
          <span className="kicker">Start a Project</span>
          <h2>Tell me what you need.</h2>
          <p>
            Fill this in with as much or as little detail as you have — even
            "I'm not sure yet" is a fine place to start. We'll reply by
            email to figure out the rest together.
          </p>

          <div className="contact__direct">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
              Message on WhatsApp ↗
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {status === "success" && (
            <p className="form-banner form-banner--success" role="status">
              Thanks — your enquiry has been sent. We'll reply by email soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-banner form-banner--error" role="alert">
              {errorMessage}{" "}
              <a href={`mailto:${contactInfo.email}`}>Email me directly instead</a>.
            </p>
          )}

          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={update("name")} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp (optional)</label>
              <input id="phone" value={form.phone} onChange={update("phone")} />
            </div>
            <div className="field">
              <label htmlFor="business">Business / Organization (optional)</label>
              <input id="business" value={form.business} onChange={update("business")} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="need">What do you need?</label>
            <select id="need" value={form.need} onChange={update("need")}>
              <option value="">Select an option</option>
              {needOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            {errors.need && <span className="field-error">{errors.need}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="budget">Budget (optional)</label>
              <input
                id="budget"
                value={form.budget}
                onChange={update("budget")}
                placeholder="e.g. ₹25,000 — or leave blank"
              />
              <span className="field-hint">
                No fixed packages — pricing depends on scope, so it's fine to
                skip this and just discuss it.
              </span>
            </div>
            <div className="field">
              <label htmlFor="timeline">Timeline (optional)</label>
              <select id="timeline" value={form.timeline} onChange={update("timeline")}>
                <option value="">Not sure yet</option>
                {timelineOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="description">Project description</label>
            <textarea
              id="description"
              rows={5}
              value={form.description}
              onChange={update("description")}
              placeholder="What are you trying to build or fix?"
            />
            {errors.description && <span className="field-error">{errors.description}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Enquiry →"}
          </button>
        </form>
      </div>
    </section>
  );
}
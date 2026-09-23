import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Why from "./components/Why";
import Work from "./components/Work";
import Process from "./components/Process";
import CtaBand from "./components/CtaBand";
import Engineering from "./components/Engineering";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <Work />
        <Process />
        <CtaBand />
        <Engineering />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

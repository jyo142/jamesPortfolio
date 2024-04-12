"use client";

import { useEffect, useRef, useState } from "react";
import ContactMeCard from "./cards/contactMeCard";
const StickyTabBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [stickyClass, setStickyClass] = useState("relative");
  const tabRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    setupTabObserver();
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };

  const setupTabObserver = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed
    };

    const callback = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectingId = entry.target.getAttribute("id");
          console.log("I FJP E", intersectingId);
          if (intersectingId) {
            setActiveTab(intersectingId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(tabRefs.current).forEach((tabRef) => {
      observer.observe(tabRef!);
    });
  };

  return (
    <>
      <div className={`et-hero-tabs-container ${stickyClass}`}>
        <a
          className={`et-hero-tab ${
            activeTab === "tab-skills" ? "et-hero-tab-active" : ""
          }`}
          href="#tab-skills"
        >
          Skills
        </a>
        <a
          className={`et-hero-tab ${
            activeTab === "tab-about" ? "et-hero-tab-active" : ""
          }`}
          href="#tab-about"
        >
          About
        </a>
        <a
          className={`et-hero-tab ${
            activeTab === "tab-resume" ? "et-hero-tab-active" : ""
          }`}
          href="#tab-resume"
        >
          Resume
        </a>

        <a
          className={`et-hero-tab ${
            activeTab === "tab-contact" ? "et-hero-tab-active" : ""
          }`}
          href="#tab-contact"
        >
          Contact
        </a>
        <span className="et-hero-tab-slider"></span>
      </div>
      <main className="et-main">
        <section
          ref={(ref) => (tabRefs.current["tab-skills"] = ref)}
          className="et-slide"
          id="tab-skills"
        >
          <h1>Skills</h1>
          <h3>something about es6</h3>
        </section>
        <section
          ref={(ref) => (tabRefs.current["tab-about"] = ref)}
          className="et-slide"
          id="tab-about"
        >
          <h1>Q/A</h1>
          <h3>something about react</h3>
        </section>
        <section
          ref={(ref) => (tabRefs.current["tab-resume"] = ref)}
          className="et-slide"
          id="tab-resume"
        >
          <h1>Resume</h1>
          <h3>something about flexbox</h3>
        </section>

        <section
          ref={(ref) => (tabRefs.current["tab-contact"] = ref)}
          className="et-slide"
          id="tab-contact"
        >
          <ContactMeCard />
        </section>
      </main>
    </>
  );
};

export default StickyTabBar;

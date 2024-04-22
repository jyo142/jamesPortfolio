"use client";

import { useEffect, useRef, useState } from "react";
import ContactMeCard from "./cards/contactMeCard";
import AboutMeSection from "./sections/aboutme";
import ResumeSection from "./sections/resume";
import SkillsSection from "./sections/skills";
const StickyTabBar = () => {
  const [activeTab, setActiveTab] = useState("tab-skills");
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
      threshold: 0.1, // Adjust threshold as needed
    };

    const callback = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectingId = entry.target.getAttribute("id");
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

  const onClickTab = (tabId: string) => {
    tabRefs.current[tabId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={`cursor-pointer et-hero-tabs-container ${stickyClass}`}>
        <a
          className={`cursor-pointer et-hero-tab ${
            activeTab === "tab-skills" ? "et-hero-tab-active" : ""
          }`}
          onClick={() => onClickTab("tab-skills")}
        >
          Skills
        </a>
        <a
          className={`cursor-pointer et-hero-tab ${
            activeTab === "tab-about" ? "et-hero-tab-active" : ""
          }`}
          onClick={() => onClickTab("tab-about")}
        >
          About
        </a>
        <a
          className={`cursor-pointer et-hero-tab ${
            activeTab === "tab-resume" ? "et-hero-tab-active" : ""
          }`}
          onClick={() => onClickTab("tab-resume")}
        >
          Resume
        </a>

        <a
          className={`cursor-pointer et-hero-tab ${
            activeTab === "tab-contact" ? "et-hero-tab-active" : ""
          }`}
          onClick={() => onClickTab("tab-contact")}
        >
          Contact
        </a>
      </div>
      <main className="et-main">
        <section
          ref={(ref) => (tabRefs.current["tab-skills"] = ref)}
          className="flex justify-center min-h-screen bg-gray-200"
          id="tab-skills"
        >
          <SkillsSection />
        </section>
        <section
          ref={(ref) => (tabRefs.current["tab-about"] = ref)}
          className="flex justify-center min-h-screen bg-gray-200"
          id="tab-about"
        >
          <AboutMeSection />
        </section>
        <section
          ref={(ref) => (tabRefs.current["tab-resume"] = ref)}
          className="flex justify-center min-h-screen bg-gray-200"
          id="tab-resume"
        >
          <ResumeSection />
        </section>

        <section
          ref={(ref) => (tabRefs.current["tab-contact"] = ref)}
          className="flex justify-center items-center min-h-screen bg-gray-200"
          id="tab-contact"
        >
          <ContactMeCard />
        </section>
      </main>
    </>
  );
};

export default StickyTabBar;

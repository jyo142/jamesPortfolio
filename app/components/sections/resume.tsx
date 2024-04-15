"use client";
import Image from "next/image";
import AchievementCard from "../cards/achievementCard";
import FrequentlyAskedQuestionsSection from "./faq";
const ResumeSection = () => {
  return (
    <div className="p-8 text-center w-full h-screen">
      <h1 className="flex justify-center text-5xl tracking-widest mb-5">
        Resume
      </h1>
      <embed src="JAMES OKADA RESUME.pdf" className="w-full h-3/4 lg:h-full" />
    </div>
  );
};

export default ResumeSection;

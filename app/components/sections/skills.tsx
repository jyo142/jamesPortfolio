"use client";
import { useState } from "react";
import {
  backendSkills,
  frontendSkills,
  toolsProcesses,
} from "@/app/models/skillModel";
import SkillsTab from "../skills/skillsTab";
import SkillTabContent from "../skills/skillTabContent";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const renderTabContent = () => {
    switch (activeTab) {
      case "frontend":
        return <SkillTabContent allSkills={frontendSkills} />;
      case "backend":
        return <SkillTabContent allSkills={backendSkills} />;
      case "toolsprocesses":
        return <SkillTabContent allSkills={toolsProcesses} />;
      default:
        return null; // Handle unexpected tab IDs gracefully
    }
  };
  return (
    <div className=" w-full lg:max-w-full m-5">
      <h1 className="flex justify-center text-5xl tracking-widest">Skills</h1>
      <ul className="flex flex-wrap text-center">
        <li className="me-2">
          <SkillsTab
            tabId="frontend"
            tabTitle="Frontend Skills"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
        <li className="me-2">
          <SkillsTab
            tabId="backend"
            tabTitle="Backend Skills"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
        <li className="me-2">
          <SkillsTab
            tabId="toolsprocesses"
            tabTitle="Tools and Processes"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
      </ul>
      {renderTabContent()}
    </div>
  );
};

export default SkillsSection;

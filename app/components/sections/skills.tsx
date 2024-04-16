"use client";
import { createContext, Fragment, useState } from "react";
import {
  backendSkills,
  frontendSkills,
  SkillModel,
  toolsProcesses,
} from "@/app/models/skillModel";
import SkillsTab from "../skills/skillsTab";
import SkillTabContent from "../skills/skillTabContent";
import { Dialog, Transition } from "@headlessui/react";

type SkillsContextType = {
  changeActiveSkill?: (skill: SkillModel) => void;
};
export const SkillsContext = createContext<SkillsContextType>({});

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState<SkillModel | null>(null);

  function closeModal() {
    setActiveSkill(null);
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "frontend":
        return (
          <SkillTabContent
            skillTitle="Frontend Skills"
            allSkills={frontendSkills}
          />
        );
      case "backend":
        return (
          <SkillTabContent
            skillTitle="Backend Skills"
            allSkills={backendSkills}
          />
        );
      case "toolsprocesses":
        return (
          <SkillTabContent
            skillTitle="Tools and Processes"
            allSkills={toolsProcesses}
          />
        );
      default:
        return null; // Handle unexpected tab IDs gracefully
    }
  };
  const changeActiveSkill = (skill: SkillModel) => {
    if (skill) {
      setActiveSkill(skill);
    }
  };
  return (
    <div className=" w-full lg:max-w-full m-5">
      <h1 className="flex justify-center text-5xl tracking-widest">Skills</h1>
      <p className="flex justify-center mt-3 mb-2">
        Click or tap on each of the skill cards to discover how I&apos;ve
        applied each skill and what I appreciate most about each one.
      </p>
      <ul className="flex flex-wrap text-center">
        <li className="me-2">
          <SkillsTab
            tabId="frontend"
            iconPath="icons/frontend.svg"
            tabTitle="Frontend Skills"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
        <li className="me-2">
          <SkillsTab
            tabId="backend"
            iconPath="icons/backend.svg"
            tabTitle="Backend Skills"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
        <li className="me-2">
          <SkillsTab
            tabId="toolsprocesses"
            iconPath="icons/tools.svg"
            tabTitle="Tools and Processes"
            currentActiveTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </li>
      </ul>
      <SkillsContext.Provider value={{ changeActiveSkill }}>
        {renderTabContent()}
      </SkillsContext.Provider>

      <Dialog
        as="div"
        open={!!activeSkill}
        className="relative z-10"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title as="h2" className="text-2xl">
                {activeSkill?.skillTitle}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-gray-500">{activeSkill?.description}</p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SkillsSection;

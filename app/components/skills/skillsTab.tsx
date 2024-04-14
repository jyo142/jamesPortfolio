"use client";
import { SkillModel } from "@/app/models/skillModel";
interface SkillsTabProps {
  tabId: string;
  tabTitle: string;
  currentActiveTab: string;
  setActiveTab: (newTab: string) => void;
}
const SkillsTab: React.FC<SkillsTabProps> = ({
  tabId,
  tabTitle,
  currentActiveTab,
  setActiveTab,
}) => {
  return (
    <a
      onClick={() => setActiveTab(tabId)}
      aria-current="page"
      className={`cursor-pointer inline-block p-4 ${
        currentActiveTab === tabId ? "bg-white" : "bg-gray"
      }`}
    >
      <p>{tabTitle}</p>
    </a>
  );
};

export default SkillsTab;

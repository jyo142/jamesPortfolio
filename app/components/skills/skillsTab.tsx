"use client";
import Image from "next/image";

interface SkillsTabProps {
  tabId: string;
  tabTitle: string;
  currentActiveTab: string;
  iconPath: string;
  setActiveTab: (newTab: string) => void;
}
const SkillsTab: React.FC<SkillsTabProps> = ({
  tabId,
  tabTitle,
  iconPath,
  currentActiveTab,
  setActiveTab,
}) => {
  return (
    <a
      onClick={() => setActiveTab(tabId)}
      aria-current="page"
      className={`cursor-pointer space-x-1 p-4 flex items ${
        currentActiveTab === tabId ? "bg-white" : "bg-gray"
      }`}
    >
      <Image src={iconPath} alt={`${tabTitle} icon`} width="16" height="16" />
      <div className="sr-only">{`${tabTitle} tab`}</div>
      <p className="hidden md:block">{tabTitle}</p>
    </a>
  );
};

export default SkillsTab;

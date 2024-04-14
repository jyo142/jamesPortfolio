"use client";
import { SkillModel } from "@/app/models/skillModel";
import SkillCard from "../cards/skillCard";
interface SkillsTabProps {
  allSkills: SkillModel[];
}
const SkillTabContent: React.FC<SkillsTabProps> = ({ allSkills }) => {
  return (
    <div className="max-w-full w-full mx-auto rounded shadow-lg bg-white p-3 px-14">
      <div className="grid grid-cols-3">
        {allSkills.map((a) => {
          return <SkillCard skillModel={a} />;
        })}
      </div>
    </div>
  );
};

export default SkillTabContent;

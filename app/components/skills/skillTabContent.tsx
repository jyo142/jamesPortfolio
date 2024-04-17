"use client";
import { SkillModel } from "@/models/skillModel";
import SkillCard from "../cards/skillCard";
interface SkillsTabProps {
  skillTitle: string;
  allSkills: SkillModel[];
}
const SkillTabContent: React.FC<SkillsTabProps> = ({
  skillTitle,
  allSkills,
}) => {
  return (
    <div className="max-w-full w-full mx-auto rounded shadow-lg bg-white p-3 px-2 md:px-5 lg:px-14">
      <h2 className="text-2xl flex justify-center">{skillTitle}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {allSkills.map((a) => {
          return <SkillCard key={a.id} skillModel={a} />;
        })}
      </div>
    </div>
  );
};

export default SkillTabContent;

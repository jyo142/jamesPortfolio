"use client";
import { SkillModel } from "@/app/models/skillModel";
import Image from "next/image";
import { useContext } from "react";
import { SkillsContext } from "../sections/skills";
interface AchievementCardProps {
  skillModel: SkillModel;
}

const SkillCard: React.FC<AchievementCardProps> = ({ skillModel }) => {
  const { changeActiveSkill } = useContext(SkillsContext);

  return (
    <div
      className="skill-card px-3 md:px-5 lg:px-14 flex flex-col justify-center items-center cursor-pointer"
      onClick={() => changeActiveSkill!(skillModel)}
    >
      <div>
        <Image
          src={skillModel.filePath}
          alt={`${skillModel.skillTitle} skill`}
          width="100"
          height="100"
        />
      </div>
      <p>{skillModel.skillTitle}</p>
    </div>
  );
};

export default SkillCard;

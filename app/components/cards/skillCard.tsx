"use client";
import { SkillModel } from "@/app/models/skillModel";
import Image from "next/image";
interface AchievementCardProps {
  skillModel: SkillModel;
}

const SkillCard: React.FC<AchievementCardProps> = ({ skillModel }) => {
  return (
    <div className="skill-card px-3 md:px-5 lg:px-14 flex flex-col justify-center items-center">
      <div>
        <Image
          src={skillModel.filePath}
          alt="James Cover photo"
          width="100"
          height="100"
        />
      </div>
      <div>{skillModel.skillTitle}</div>
    </div>
  );
};

export default SkillCard;

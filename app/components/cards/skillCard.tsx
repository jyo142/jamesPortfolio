"use client";
import { SkillModel } from "@/app/models/skillModel";
import Image from "next/image";
interface AchievementCardProps {
  skillModel: SkillModel;
}

const SkillCard: React.FC<AchievementCardProps> = ({ skillModel }) => {
  return (
    <div className="skill-card">
      <div className="flex justify-center">
        <Image
          src={skillModel.filePath}
          alt="James Cover photo"
          width="100"
          height="100"
        />
      </div>
      <div className="flex justify-center">{skillModel.skillTitle}</div>
    </div>
  );
};

export default SkillCard;

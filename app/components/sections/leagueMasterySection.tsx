"use client";
import { MasteryData } from "@/models/leagueModel";
import LeagueChampMasteryCard from "../cards/leagueChampMasteryCard";

interface LeagueMasterySectionProps {
  masteryData?: MasteryData;
}
const LeagueMasterySection: React.FC<LeagueMasterySectionProps> = ({
  masteryData,
}) => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-xl">
        Total Mastery Score : {masteryData?.totalMasteryScore}
      </h2>
      <div className="flex space-x-5 mt-3">
        {masteryData?.championMastery.map((c) => (
          <LeagueChampMasteryCard championMastery={c} />
        ))}
      </div>
    </div>
  );
};

export default LeagueMasterySection;

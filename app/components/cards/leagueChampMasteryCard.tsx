"use client";
import { ChampionMastery } from "@/models/leagueModel";
import Image from "next/image";

interface LeagueChampMasteryCardProps {
  championMastery?: ChampionMastery;
}
const LeagueChampMasteryCard: React.FC<LeagueChampMasteryCardProps> = ({
  championMastery,
}) => {
  if (!championMastery) {
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <Image
        src={championMastery.championImg!}
        alt="James Cover photo"
        width="75"
        height="75"
      />
      <h2 className="text-xl">
        Mastery Level : {championMastery.masteryLevel}
      </h2>
    </div>
  );
};

export default LeagueChampMasteryCard;

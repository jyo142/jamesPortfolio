"use client";
import { LeagueProfileData } from "@/models/leagueModel";
import Image from "next/image";

interface LeagueInfoCardProps {
  profileData?: LeagueProfileData;
}
const LeagueInfoCard: React.FC<LeagueInfoCardProps> = ({ profileData }) => {
  if (!profileData) {
    return null;
  }
  return (
    <div className="flex flex-col items-center rounded shadow-lg bg-white p-3 px-8 curs m-3">
      <Image
        src={profileData.profileIconPath!}
        alt="James Cover photo"
        width="75"
        height="75"
      />
      <h2 className="text-xl">{profileData.riotId}</h2>
      <h2 className="text-xl">Summoner Level : {profileData.summonerLevel}</h2>
    </div>
  );
};

export default LeagueInfoCard;

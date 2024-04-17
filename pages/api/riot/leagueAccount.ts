import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/node_modules/axios/index";
import {
  DDRAGON_CDN_DOMAIN,
  DDRAGON_IMG_ENDPOINT,
  RIOTGAMES_API_DOMAIN,
  RIOT_API_DOMAIN,
  RIOT_BYRIOTID_ENDPOINT,
  SUMMONER_BY_PUUID_ENDPOINT,
} from "@/app/constants";
import { LeagueProfileData } from "@/models/leagueModel";

export const getLeaguePuuid = async () => {
  const response = await axios.get(
    `${RIOT_API_DOMAIN}${RIOT_BYRIOTID_ENDPOINT}${process.env.RIOT_GAMER}/${process.env.RIOT_TAG}?api_key=${process.env.RIOT_API_KEY}`
  );
  return response.data;
};

export const getLeagueAccountInfo = async (leaguePuuid: string) => {
  const response = await axios.get(
    `${RIOTGAMES_API_DOMAIN}${SUMMONER_BY_PUUID_ENDPOINT}${leaguePuuid}?api_key=${process.env.RIOT_API_KEY}`
  );
  return response.data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeagueProfileData>
) {
  try {
    const result = await getLeaguePuuid();
    const accountInfo = await getLeagueAccountInfo(result.puuid);
    const responseData: LeagueProfileData = {
      profileIconPath: `${DDRAGON_CDN_DOMAIN}${DDRAGON_IMG_ENDPOINT}${accountInfo.profileIconId}.png`,
      summonerLevel: accountInfo.summonerLevel,
      riotId: result.gameName,
      puuid: result.puuid,
    };
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json({
      error: "failed to load data",
    });
  }
}

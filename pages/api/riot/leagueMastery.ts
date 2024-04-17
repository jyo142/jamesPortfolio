import type { NextApiRequest, NextApiResponse } from "next";
import axios from "@/node_modules/axios/index";
import {
  CHAMPION_MASTERY_SCORE_ENDPOINT,
  CHAMPION_MASTERY_SCORE_TOP_ENDPOINT,
  DDRAGON_CDN_DOMAIN,
  DDRAGON_CHAMPION_IMG_ENDPOINT,
  DDRAGON_CHAMPION_INFORMATION,
  RIOTGAMES_API_DOMAIN,
} from "@/app/constants";
import { MasteryData } from "@/models/leagueModel";

export const getLeagueMasterScore = async (leaguePuuid: string) => {
  const response = await axios.get(
    `${RIOTGAMES_API_DOMAIN}${CHAMPION_MASTERY_SCORE_ENDPOINT}${leaguePuuid}?api_key=${process.env.NEXT_RIOT_API_KEY}`
  );
  return response.data;
};

export const getChampionMasterScore = async (leaguePuuid: string) => {
  const replaced = CHAMPION_MASTERY_SCORE_TOP_ENDPOINT.replace(
    "{encryptedPUUID}",
    leaguePuuid
  );
  const response = await axios.get(
    `${RIOTGAMES_API_DOMAIN}${replaced}?api_key=${process.env.NEXT_RIOT_API_KEY}`
  );
  return response.data;
};

export const getChampionInformation = async () => {
  const response = await axios.get(DDRAGON_CHAMPION_INFORMATION);
  return response.data;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MasteryData>
) {
  try {
    const { puuid } = req.query;
    if (!puuid) {
      res.status(500).json({ error: "invalid parameter" });
      return;
    }
    const masteryData = await Promise.all([
      getLeagueMasterScore(puuid),
      getChampionMasterScore(puuid),
      getChampionInformation(),
    ]);

    const championData = masteryData[2].data;
    const charIdToName = new Map<string, string>();
    for (const [key, value] of Object.entries(championData)) {
      charIdToName.set((value as any).key, key);
    }
    const leagueMasterScore = masteryData[0];
    const championMasterScore = masteryData[1];
    const result: MasteryData = {
      totalMasteryScore: leagueMasterScore,
      championMastery: championMasterScore.map((c: any) => {
        const charName = charIdToName.get(c.championId.toString());
        return {
          masteryLevel: c.championLevel,
          championId: c.championId,
          championImg: charName
            ? `${DDRAGON_CDN_DOMAIN}${DDRAGON_CHAMPION_IMG_ENDPOINT}${charName}.png`
            : null,
        };
      }),
    };

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}

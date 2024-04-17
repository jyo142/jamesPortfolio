export interface LeagueProfileData {
  profileIconPath: string;
  riotId: string;
  summonerLevel: number;
  puuid: string;
}

export interface MasteryData {
  totalMasteryScore: number;
  championMastery: ChampionMastery[];
}

export interface ChampionMastery {
  masteryLevel: number;
  championImg: string;
}

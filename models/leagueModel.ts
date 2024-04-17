export interface LeagueProfileData {
  profileIconPath: string;
  riotId: string;
  summonerLevel: number;
  puuid: string;
  error?: string;
}

export interface MasteryData {
  totalMasteryScore: number;
  championMastery: ChampionMastery[];
  error?: string;
}

export interface ChampionMastery {
  masteryLevel: number;
  championId: number;
  championImg: string;
}

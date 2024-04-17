"use client";

import axios from "@/node_modules/axios/index";

const RIOT_API_DOMAIN = "https://americas.api.riotgames.com/riot";
const RIOT_BYRIOTID_ENDPOINT = "/account/v1/accounts/by-riot-id/";

export const getLeagueInfo = async () => {
  try {
    const response = await axios.get("/api/leagueApi");
    return response;
  } catch (e) {
    console.error(e);
  }
};

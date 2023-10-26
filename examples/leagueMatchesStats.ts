import EAFCApiService from "../src/api";

const apiService = new EAFCApiService();
const leagueMatchesStats = async () =>
  apiService.leagueMatchesStats({
    clubIds: "2605511",
    platform: "common-gen5",
    matchType: "leagueMatch",
  });

leagueMatchesStats().then(console.log).catch(console.error);

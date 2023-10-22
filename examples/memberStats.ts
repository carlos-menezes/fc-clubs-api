import EAFCApiService from "../src/api";

const apiService = new EAFCApiService();
const memberStats = async () =>
  apiService.memberStats({
    clubId: "2605511",
    platform: "common-gen5",
  });

memberStats().then(console.log).catch(console.error);

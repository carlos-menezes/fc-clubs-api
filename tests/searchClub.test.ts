import EAFCApiService from "../src/api";

describe("EAFCApiService", () => {
  let apiService = new EAFCApiService();

  describe("searchClubByName", () => {
    it("should return an array of clubs", async () => {
      const result = await apiService.searchClubByName({
        clubName: "PILOKA FC",
        platform: "common-gen5",
      });
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      // TODO: validate schema
    });

    it("should throw an error if the input is invalid", async () => {
      await expect(
        apiService.searchClubByName({ clubName: "", platform: "nx" })
      ).rejects.toThrow();
    });
  });
});

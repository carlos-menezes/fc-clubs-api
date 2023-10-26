import EAFCApiService from "../src/api";

describe("EAFCApiService", () => {
  let apiService = new EAFCApiService();

  describe("overallStats", () => {
    it("should return an array of overall stats", async () => {
      const result = await apiService.overallStats({
        clubIds: "2605511",
        platform: "common-gen5",
      });
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it("should throw an error if the input is invalid", async () => {
      await expect(
        apiService.overallStats({ clubIds: "", platform: "common-gen5" })
      ).rejects.toThrow();
    });
  });
});

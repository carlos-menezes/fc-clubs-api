import { EAFCApiService } from '../src/api'

describe('EAFCApiService', () => {
  const apiService = new EAFCApiService()

  describe('leagueMatchesStats', () => {
    it('should return an array of league matches stats', async () => {
      const result = await apiService.matchesStats({
        clubIds: '2605511',
        platform: 'common-gen5',
        matchType: 'leagueMatch',
      })
      expect(Array.isArray(result)).toBe(true)
    })

    it('should return an array of playoff matches stats', async () => {
      const result = await apiService.matchesStats({
        clubIds: '2605511',
        platform: 'common-gen5',
        matchType: 'playoffMatch',
      })
      expect(Array.isArray(result)).toBe(true)
    })

    it('should throw an error if the input is invalid', async () => {
      await expect(
        apiService.matchesStats({
          clubIds: '',
          platform: 'nx',
          matchType: 'playoffMatch',
        }),
      ).rejects.toThrow()
    })
  })
})

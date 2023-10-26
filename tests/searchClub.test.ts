import EAFCApiService from '../src/api'

describe('EAFCApiService', () => {
  let apiService = new EAFCApiService()

  describe('searchClub', () => {
    it('should return an array of clubs', async () => {
      const result = await apiService.searchClub({
        clubName: 'PILOKA FC',
        platform: 'common-gen5',
      })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
    })

    it('should throw an error if the input is invalid', async () => {
      await expect(
        apiService.searchClub({ clubName: '', platform: 'nx' }),
      ).rejects.toThrow()
    })
  })
})

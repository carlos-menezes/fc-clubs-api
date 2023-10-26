import EAFCApiService from '../src/api'

describe('EAFCApiService', () => {
  let apiService = new EAFCApiService()

  describe('memberStats', () => {
    it('should return an array of member stats', async () => {
      const result = await apiService.memberStats({
        clubId: '2605511',
        platform: 'common-gen5',
      })
      expect(result).toHaveProperty('members')
      expect(result).toHaveProperty('positionCount')
    })

    it('should throw an error if the input is invalid', async () => {
      await expect(
        apiService.memberStats({ clubId: '', platform: 'common-gen5' }),
      ).rejects.toThrow()
    })
  })
})

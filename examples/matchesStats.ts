import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const leagueMatchesStats = async () =>
  apiService.matchesStats({
    clubIds: '2605511',
    platform: 'common-gen5',
    matchType: 'playoffMatch',
  })

leagueMatchesStats().then(console.log).catch(console.error)

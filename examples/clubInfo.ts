import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const search = async () =>
  apiService.clubInfo({
    clubIds: '2605511',
    platform: 'common-gen5',
  })

search()
  .then(c => console.log(c['2605511']))
  .catch(console.error)

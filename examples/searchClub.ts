import EAFCApiService from "../src/api";

const apiService = new EAFCApiService()
const search = async () => apiService.searchClubByName({
    clubName: 'Legends',
    platform: 'common-gen5'
})

search().then(console.log).catch(console.error)
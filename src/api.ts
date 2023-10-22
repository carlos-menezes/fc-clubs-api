// curl 'https://proclubs.ea.com/api/fc/allTimeLeaderboard/search?platform=common-gen5&clubName=PILOKA%20FC' \
//   -H 'authority: proclubs.ea.com' \
//   -H 'accept: application/json' \
//   -H 'accept-language: en-GB,en;q=0.9' \
//   -H 'content-type: application/json' \
//   -H 'origin: https://www.ea.com' \
//   -H 'referer: https://www.ea.com/' \
//   -H 'sec-ch-ua: "Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-site' \
//   -H 'sec-gpc: 1' \
//   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' \

import { type InferType } from 'yup'
import { type Club } from './models'
import { ROUTES } from './routes'
import { type SCHEMAS } from './schemas'

class EAFCApiService {
  // Add properties
  private readonly baseUrl = new URL('https://proclubs.ea.com/api/fc/')

  /**
     * Send a GET request to the EAFC API
     *
     * @param endpoint
     * @returns
     */
  private async get<TInput extends Record<string, string>, TModel>(endpoint: keyof typeof ROUTES, input: TInput): Promise<TModel> {
    const route = ROUTES[endpoint]
    const url = new URL(route.url, this.baseUrl)
    await route.schema.validate(input, { strict: true })
    Object.keys(input).forEach(key => {
      url.searchParams.append(key, input[key])
    })

    const request = await fetch(url.toString(), {
      headers: {
        accept: 'application/json',
        'accept-language': 'en-GB,en;q=0.9',
        'content-type': 'application/json',
        origin: 'https://www.ea.com',
        referer: 'https://www.ea.com/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
      }
    })
    const json: TModel = await request.json()
    return json
  }

  public async searchClubByName (input: InferType<typeof SCHEMAS.CLUB_SEARCH>): Promise<Club[]> {
    const response = await this.get<InferType<typeof SCHEMAS.CLUB_SEARCH>, Club[]>('CLUB_SEARCH', input)
    return response
  }
}

export default EAFCApiService

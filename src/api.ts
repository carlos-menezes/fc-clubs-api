import { type InferType } from "yup";
import type { OverallStats, Club, MemberStats } from "./models";
import { ROUTES } from "./routes";
import { SCHEMAS } from "./schemas";

class EAFCApiService {
  private readonly baseUrl = new URL("https://proclubs.ea.com/api/fc/");

  /**
   * Send a GET request to the EAFC API
   *
   * @param endpoint
   * @returns
   */
  private get = async <TInput extends Record<string, string>, TModel>(
    endpoint: keyof typeof ROUTES,
    input: TInput
  ): Promise<TModel> => {
    const route = ROUTES[endpoint];
    const url = new URL(route.url, this.baseUrl);
    await route.schema.validate(input, { strict: true });
    Object.keys(input).forEach((key) => {
      url.searchParams.append(key, input[key]);
    });

    const request = await fetch(url.toString(), {
      headers: {
        accept: "application/json",
        "accept-language": "en-GB,en;q=0.9",
        "content-type": "application/json",
        origin: "https://www.ea.com",
        referer: "https://www.ea.com/",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
      },
    });
    const json: TModel = await request.json();
    return json;
  };

  /**
   * Search for a club by name
   * @param input
   * @returns
   */
  searchClubByName = async (
    input: InferType<typeof SCHEMAS.CLUB_SEARCH>
  ): Promise<Club[]> => this.get("CLUB_SEARCH", input);

  /**
   * Get the overall stats of the club
   * @param input
   * @returns
   */
  overallStats = async (
    input: InferType<typeof SCHEMAS.OVERALL_STATS>
  ): Promise<OverallStats[]> => this.get("OVERALL_STATS", input);

  /**
   * Get the stats of all members of the club
   * @param input
   * @returns
   */
  memberStats = async (
    input: InferType<typeof SCHEMAS.MEMBER_STATS>
  ): Promise<MemberStats[]> => this.get("MEMBER_STATS", input);
}

export default EAFCApiService;

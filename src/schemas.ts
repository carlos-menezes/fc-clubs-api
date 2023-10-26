import { object, string } from "yup";
import { PLATFORMS } from "./platform";

export type TMatchType = "leagueMatch";
const MATCH_TYPES: TMatchType[] = ["leagueMatch"];

const SCHEMAS = {
  CLUB_SEARCH: object({
    clubName: string().required().min(1).max(32),
    platform: string().required().oneOf(PLATFORMS),
  }),
  OVERALL_STATS: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
  MEMBER_STATS: object({
    clubId: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
  LEAGUE_MATCHES_STATS: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
    matchType: string().required().oneOf(MATCH_TYPES),
  }),
} as const;

export { SCHEMAS };

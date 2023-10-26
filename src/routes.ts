import { type AnyObjectSchema } from 'yup'
import { SCHEMAS } from './schemas'

type TRouteName =
  | "CLUB_SEARCH"
  | "OVERALL_STATS"
  | "MEMBER_STATS"
  | "MATCHES_STATS";

interface ROUTE {
  url: string;
  schema: AnyObjectSchema;
}

const ROUTES: Record<TRouteName, ROUTE> = {
  CLUB_SEARCH: {
    url: "allTimeLeaderboard/search",
    schema: SCHEMAS.CLUB_SEARCH,
  },
  OVERALL_STATS: {
    url: "clubs/overallStats",
    schema: SCHEMAS.OVERALL_STATS,
  },
  MEMBER_STATS: {
    url: "members/career/stats",
    schema: SCHEMAS.MEMBER_STATS,
  },
  MATCHES_STATS: {
    url: "clubs/matches",
    schema: SCHEMAS.MATCHES_STATS,
  },
};

export type { TRouteName };
export { ROUTES };

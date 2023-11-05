import { InferType, object, string } from 'yup'
import { PLATFORMS } from './platform'

export type TMatchType = 'leagueMatch' | 'playoffMatch'
const MATCH_TYPES: TMatchType[] = ['leagueMatch', 'playoffMatch']

const SCHEMAS = {
  CLUB_SEARCH: object({
    clubName: string().required().min(1).max(32),
    platform: string().required().oneOf(PLATFORMS),
  }),
  OVERALL_STATS: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
  MEMBER_CAREER_STATS: object({
    clubId: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
  MEMBER_STATS: object({
    clubId: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
  MATCHES_STATS: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
    matchType: string().required().oneOf(MATCH_TYPES),
  }),
  CLUB_INFO: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
} as const

type ClubSearchInput = InferType<typeof SCHEMAS.CLUB_SEARCH>
type OverallStatsInput = InferType<typeof SCHEMAS.OVERALL_STATS>
type MemberCareerStatsInput = InferType<typeof SCHEMAS.MEMBER_CAREER_STATS>
type MemberStatsInput = InferType<typeof SCHEMAS.MEMBER_STATS>
type MatchesStatsInput = InferType<typeof SCHEMAS.MATCHES_STATS>
type ClubInfoInput = InferType<typeof SCHEMAS.CLUB_INFO>

export { SCHEMAS }
export type {
  ClubSearchInput,
  OverallStatsInput,
  MemberCareerStatsInput,
  MemberStatsInput,
  MatchesStatsInput,
  ClubInfoInput,
}

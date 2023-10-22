import { type AnyObjectSchema } from 'yup'
import { SCHEMAS } from './schemas'

type ROUTE_NAME = 'CLUB_SEARCH'
interface ROUTE {
  url: string
  schema: AnyObjectSchema
}

export const ROUTES: Record<ROUTE_NAME, ROUTE> = {
  CLUB_SEARCH: {
    url: 'allTimeLeaderboard/search',
    schema: SCHEMAS.CLUB_SEARCH
  }
}

export type { ROUTE_NAME }

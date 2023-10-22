import { object, string } from "yup";
import { PLATFORMS } from "./platform";

const SCHEMAS = {
  CLUB_SEARCH: object({
    clubName: string().required().min(1).max(32),
    platform: string().required().oneOf(PLATFORMS),
  }),
  OVERALL_STATS: object({
    clubIds: string().required(),
    platform: string().required().oneOf(PLATFORMS),
  }),
} as const;

export { SCHEMAS };

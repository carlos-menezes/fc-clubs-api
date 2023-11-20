# eafc-clubs-api

An API written in TypeScript for the FC24 Clubs mode which allows developers to retrieve game statistics for all platforms.

## Installation
`npm i eafc-clubs-api`

## Example
Check `examples/` for common use cases of this library.

## Endpoints

### `searchClub(input: InferType<typeof SCHEMAS.CLUB_SEARCH>): Promise<Club[]>`

Search for a club by name.

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.CLUB_SEARCH` schema.

#### Returns

An array of `Club` objects that match the search criteria.

### `overallStats(input: InferType<typeof SCHEMAS.OVERALL_STATS>): Promise<OverallStats[]>`

Get the overall stats of the club.

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.OVERALL_STATS` schema.

#### Returns

An array of `OverallStats` objects that represent the overall stats of the club.

### `memberCareerStats(input: InferType<typeof SCHEMAS.MEMBER_CAREER_STATS>): Promise<MemberCareerStats[]>`

Get the stats of all members of the club.

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.MEMBER_CAREER_STATS` schema.

#### Returns

An array of `MemberCareerStats` objects that represent the career stats of all members of the club.

### `matchesStats(input: InferType<typeof SCHEMAS.MATCHES_STATS>): Promise<Match[]>`

Get the stats of all matches of the club

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.MATCHES_STATS` schema.

#### Returns

An array of `Match` objects that represent the stats of all matches of the club.

### `memberStats(input: InferType<typeof SCHEMAS.MEMBER__STATS>): Promise<MemberStats[]>`

Get the stats of all members of the club.

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.MEMBER__STATS` schema.

#### Returns

An array of `MemberStats` objects that represent the  stats of all members of the club.
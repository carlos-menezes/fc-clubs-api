# eafc-clubs-api

An API written in TypeScript for the EAFC24 Clubs mode which allows developers to retrieve game statistics for all platforms.

## Example
Check `examples/` for common use cases of this library.

## Endpoints

### `searchClubByName(input: InferType<typeof SCHEMAS.CLUB_SEARCH>): Promise<Club[]>`

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

### `memberStats(input: InferType<typeof SCHEMAS.MEMBER_STATS>): Promise<MemberStats[]>`

Get the stats of all members of the club.

#### Parameters

- `input`: An object containing the search parameters. The object must conform to the `SCHEMAS.MEMBER_STATS` schema.

#### Returns

An array of `MemberStats` objects that represent the stats of all members of the club.
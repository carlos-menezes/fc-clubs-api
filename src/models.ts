export interface Club {
  clubId: string
  wins: string
  losses: string
  ties: string
  gamesPlayed: string
  gamesPlayedPlayoff: string
  goals: string
  goalsAgainst: string
  cleanSheets: string
  points: string
  reputationtier: string
  clubInfo: ClubInfo
  platform: string
  clubName: string
  currentDivision: string
}

export interface ClubInfo {
  name: string
  clubId: number
  regionId: number
  teamId: number
  customKit: CustomKit
}

export interface CustomKit {
  stadName: string
  kitId: string
  seasonalTeamId: string
  seasonalKitId: string
  selectedKitType: string
  customKitId: string
  customAwayKitId: string
  customThirdKitId: string
  customKeeperKitId: string
  kitColor1: string
  kitColor2: string
  kitColor3: string
  kitColor4: string
  kitAColor1: string
  kitAColor2: string
  kitAColor3: string
  kitAColor4: string
  kitThrdColor1: string
  kitThrdColor2: string
  kitThrdColor3: string
  kitThrdColor4: string
  dCustomKit: string
  crestColor: string
  crestAssetId: string
}

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

export interface OverallStats {
  clubId: string;
  bestDivision: any;
  bestFinishGroup: any;
  finishesInDivision1Group1: string;
  finishesInDivision2Group1: string;
  finishesInDivision3Group1: string;
  finishesInDivision4Group1: string;
  finishesInDivision5Group1: string;
  finishesInDivision6Group1: string;
  gamesPlayed: string;
  gamesPlayedPlayoff: string;
  goals: string;
  goalsAgainst: string;
  promotions: string;
  relegations: string;
  losses: string;
  ties: string;
  wins: string;
  lastMatch0: string;
  lastMatch1: string;
  lastMatch2: string;
  lastMatch3: string;
  lastMatch4: string;
  lastMatch5: string;
  lastMatch6: string;
  lastMatch7: string;
  lastMatch8: string;
  lastMatch9: string;
  lastOpponent0: string;
  lastOpponent1: string;
  lastOpponent2: string;
  lastOpponent3: string;
  lastOpponent4: string;
  lastOpponent5: string;
  lastOpponent6: string;
  lastOpponent7: string;
  lastOpponent8: string;
  lastOpponent9: string;
  wstreak: string;
  unbeatenstreak: string;
  skillRating: string;
  reputationtier: string;
  leagueAppearances: string;
}

export interface MemberStats {
  members: Array<{
    name: string;
    proPos: string;
    gamesPlayed: string;
    goals: string;
    assists: string;
    manOfTheMatch: string;
    ratingAve: string;
    prevGoals: string;
    favoritePosition: string;
  }>;
  positionCount: {
    midfielder: number;
    goalkeeper: number;
    forward: number;
    defender: number;
  };
}
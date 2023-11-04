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
  clubInfo: ClubInfo[keyof ClubInfo]
  platform: string
  clubName: string
  currentDivision: string
}

/**
 * Here, the key is the `clubId`
 */
export type ClubInfo = Record<
  string,
  {
    name: string
    clubId: number
    regionId: number
    teamId: number
    customKit: {
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
  }
>

export interface _ClubInfo {
  name: string
  clubId: number
  regionId: number
  teamId: number
  customKit: {
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
}

export interface OverallStats {
  clubId: string
  bestDivision: string
  bestFinishGroup: string
  finishesInDivision1Group1: string
  finishesInDivision2Group1: string
  finishesInDivision3Group1: string
  finishesInDivision4Group1: string
  finishesInDivision5Group1: string
  finishesInDivision6Group1: string
  gamesPlayed: string
  gamesPlayedPlayoff: string
  goals: string
  goalsAgainst: string
  promotions: string
  relegations: string
  losses: string
  ties: string
  wins: string
  lastMatch0: string
  lastMatch1: string
  lastMatch2: string
  lastMatch3: string
  lastMatch4: string
  lastMatch5: string
  lastMatch6: string
  lastMatch7: string
  lastMatch8: string
  lastMatch9: string
  lastOpponent0: string
  lastOpponent1: string
  lastOpponent2: string
  lastOpponent3: string
  lastOpponent4: string
  lastOpponent5: string
  lastOpponent6: string
  lastOpponent7: string
  lastOpponent8: string
  lastOpponent9: string
  wstreak: string
  unbeatenstreak: string
  skillRating: string
  reputationtier: string
  leagueAppearances: string
}

export interface MemberStats {
  members: Array<{
    name: string
    proPos: string
    gamesPlayed: string
    goals: string
    assists: string
    manOfTheMatch: string
    ratingAve: string
    prevGoals: string
    favoritePosition: string
  }>
  positionCount: {
    midfielder: number
    goalkeeper: number
    forward: number
    defender: number
  }
}

export interface Match {
  matchId: string
  timestamp: number
  timeAgo: {
    number: number
    unit: string
  }
  clubs: Record<
    string,
    {
      date: string
      gameNumber: string
      goals: string
      goalsAgainst: string
      losses: string
      matchType: string
      result: string
      score: string
      season_id: string
      TEAM: string
      ties: string
      winnerByDnf: string
      wins: string
      details: {
        name: string
        clubId: number
        regionId: number
        teamId: number
        customKit: {
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
      }
    }
  >
  players: Record<
    string,
    Record<
      string,
      {
        assists: string
        cleansheetsany: string
        cleansheetsdef: string
        cleansheetsgk: string
        goals: string
        goalsconceded: string
        losses: string
        mom: string
        namespace: string
        passattempts: string
        passesmade: string
        pos: string
        rating: string
        realtimegame: string
        realtimeidle: string
        redcards: string
        saves: string
        SCORE: string
        shots: string
        tackleattempts: string
        tacklesmade: string
        vproattr: string
        vprohackreason: string
        wins: string
        playername: string
      }
    >
  >
  aggregate: Record<
    string,
    {
      assists: number
      cleansheetsany: number
      cleansheetsdef: number
      cleansheetsgk: number
      goals: number
      goalsconceded: number
      losses: number
      mom: number
      namespace: number
      passattempts: number
      passesmade: number
      pos: number
      rating: number
      realtimegame: number
      realtimeidle: number
      redcards: number
      saves: number
      SCORE: number
      shots: number
      tackleattempts: number
      tacklesmade: number
      vproattr: number
      vprohackreason: number
      wins: number
    }
  >
}

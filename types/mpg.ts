export type MpgClubID = `mpg_championship_club_${number}`;
export type MpgPlayerID = `mpg_championship_player_${number}`;
export type MpgPlayerStatsID =
  `mpg_championship_player_stats_${number}_${number}`;

export type MpgChampionshipClub = {
  championships: Record<
    string,
    {
      jerseys: Record<string, string>;
      active: boolean;
    }
  >;
  id: MpgClubID;
  name: {
    "fr-FR": string;
    "en-GB": string;
    "es-ES": string;
  };
  shortName: string;
  defaultJerseyUrl: string;
  defaultAssets?: {
    logo: {
      small: string;
      medium: string;
    };
  };
};

export type MpgChampionshipClubsResponse = {
  championshipClubs: Record<MpgClubID, MpgChampionshipClub>;
};

export type MpgChampionshipPlayerPool = {
  id: MpgPlayerID;
  firstName: string | null;
  lastName: string;
  position: number;
  ultraPosition: number;
  quotation: number;
  clubId: MpgClubID;
  stats: {
    totalMatches: number;
    averageRating?: number;
    totalGoals?: number;
    totalStartedMatches?: number;
    totalPlayedMatches?: number;
  };
};

export type MpgChampionshipPlayersPoolResponse = {
  poolPlayers: MpgChampionshipPlayerPool[];
};

export type MpgChampionshipPlayer = {
  id: MpgPlayerStatsID;
  type: string;
  championships: Record<
    string,
    {
      [clubId: MpgClubID]: {
        joinDate: string;
      };
      clubs: {
        [clubId: MpgClubID]: {
          matches: {
            matchId: string;
            gameWeekNumber: number;
            date: string;
            home: {
              clubId: MpgClubID;
              score: number;
            };
            away: {
              clubId: MpgClubID;
              score: number;
            };
            playerPerformance: {
              status: number;
              rating: number;
              goals: number;
              ownGoals: number;
              minutesPlayed: number;
            };
          }[];
          quotations: {
            quotation: number;
            date: string;
          }[];
          stats: {
            totalPlayedMatches?: number;
            totalStartedMatches?: number;
            totalGoals?: number;
            totalOwnGoals?: number;
            totalYellowCard?: number;
            totalRedCard?: number;
            totalMinutesPlayed?: number;
            totalCleanSheet?: number;
            totalGoalsConceded?: number;
            totalScoringAtt?: number;
            totalShotOffTarget?: number;
            totalBigChanceMissed?: number;
            totalPenaltiesScored?: number;
            totalPenalties?: number;
            totalCross?: number;
            totalAccurateCross?: number;
            totalContest?: number;
            totalWonContest?: number;
            totalWonDuel?: number;
            totalDuel?: number;
            totalTouches?: number;
            totalLostBall?: number;
            totalGoalAssist?: number;
            totalIntercept?: number;
            totalTackle?: number;
            totalMistake?: number;
            totalFouls?: number;
            totalBigChanceCreated?: number;
            totalAccuratePass?: number;
            totalPasses?: number;
            totalAccuratePassBackZone?: number;
            totalPassBackZone?: number;
            totalPassFwdZone?: number;
            totalAccuratePassFwdZone?: number;
            totalAccurateLongPass?: number;
            totalLongPass?: number;
            totalFouled?: number;
            averageRating?: number;
          };
        };
      };
      total: {
        matches: {
          playerClubId: MpgClubID;
          matchId: string;
          gameWeekNumber: number;
          date: string;
          home: {
            clubId: MpgClubID;
            score: number;
          };
          away: {
            clubId: MpgClubID;
            score: number;
          };
          playerPerformance: {
            status: number;
            rating: number;
            goals: number;
            ownGoals: number;
            minutesPlayed: number;
          };
        }[];
        quotations: {
          quotation: number;
          date: string;
        }[];
        stats: {
          totalPlayedMatches?: number;
          totalStartedMatches?: number;
          totalGoals?: number;
          totalOwnGoals?: number;
          totalYellowCard?: number;
          totalRedCard?: number;
          totalMinutesPlayed?: number;
          totalCleanSheet?: number;
          totalGoalsConceded?: number;
          totalScoringAtt?: number;
          totalShotOffTarget?: number;
          totalBigChanceMissed?: number;
          totalPenaltiesScored?: number;
          totalPenalties?: number;
          totalCross?: number;
          totalAccurateCross?: number;
          totalContest?: number;
          totalWonContest?: number;
          totalWonDuel?: number;
          totalDuel?: number;
          totalTouches?: number;
          totalLostBall?: number;
          totalGoalAssist?: number;
          totalIntercept?: number;
          totalTackle?: number;
          totalMistake?: number;
          totalFouls?: number;
          totalBigChanceCreated?: number;
          totalAccuratePass?: number;
          totalPasses?: number;
          totalAccuratePassBackZone?: number;
          totalPassBackZone?: number;
          totalPassFwdZone?: number;
          totalAccuratePassFwdZone?: number;
          totalAccurateLongPass?: number;
          totalLongPass?: number;
          totalFouled?: number;
          averageRating?: number;
        };
        nextMatches: [];
      };
      keySeasonStats: {
        quotation: number;
        averageRating: number;
        percentageStarter: number;
        ratioGoals: number;
        ratioScoringAtt: number;
        ratioBigChanceCreated: number;
      };
      percentRanks: {
        quotation: number;
        averageRating: number;
        percentageStarter: number;
        ratioGoals: number;
        ratioScoringAtt: number;
        ratioBigChanceCreated: number;
      };
      averagePercentRanks: {
        quotation: number;
        averageRating: number;
        percentageStarter: number;
        ratioGoals: number;
        ratioScoringAtt: number;
        ratioBigChanceCreated: number;
      };
    }
  >;
  position: number;
  ultraPosition: number;
};

export type MpgChampionshipPlayerResponse = MpgChampionshipPlayer;

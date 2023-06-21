import { MpgChampionshipPlayer } from "../types/mpg";

export const listDisplayStatistics: {
  id: string;
  label: string;
  valueExtrator: (player: MpgChampionshipPlayer) => string;
}[] = [
  {
    id: "totalPlayedMatches",
    label: "Nombre de matchs joués",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalPlayedMatches?.toString() ??
        "-"
      );
    },
  },
  {
    id: "totalGoals",
    label: "Nombre de buts",
    valueExtrator: (player) => {
      return player.championships[1].total.stats.totalGoals?.toString() ?? "-";
    },
  },
  {
    id: "totalGoalAssist",
    label: "Nombre de passes décisives",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalGoalAssist?.toString() ?? "-"
      );
    },
  },
  {
    id: "totalYellowCard",
    label: "Nombre de cartons jaunes",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalYellowCard?.toString() ?? "-"
      );
    },
  },
  {
    id: "totalRedCard",
    label: "Nombre de cartons rouges",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalRedCard?.toString() ?? "-"
      );
    },
  },
  {
    id: "totalMinutesPlayed",
    label: "Nombre de minutes jouées",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalMinutesPlayed?.toString() ??
        "-"
      );
    },
  },
  {
    id: "totalIntercept",
    label: "Nombre d'interceptions",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalIntercept?.toString() ?? "-"
      );
    },
  },
  {
    id: "totalCleanSheet",
    label: "Nombre de clean sheets",
    valueExtrator: (player) => {
      return (
        player.championships[1].total.stats.totalCleanSheet?.toString() ?? "-"
      );
    },
  },
  {
    id: "ratioGoals",
    label: "Moyenne de buts par match",
    valueExtrator: (player) => {
      const ratioGoals = player.championships[1].keySeasonStats.ratioGoals;
      if (ratioGoals) return ratioGoals.toFixed(2);
      else return "-";
    },
  },
  {
    id: "ratioDuel",
    label: "Duels gagnés",
    valueExtrator: (player) => {
      const totalWonDuel = player.championships[1].total.stats.totalWonDuel;
      const totalDuel = player.championships[1].total.stats.totalDuel;
      if (typeof totalDuel === "number" && typeof totalWonDuel === "number")
        return `${totalWonDuel} / ${totalDuel}`;
      else return "-";
    },
  },
  {
    id: "ratioPenalties",
    label: "Penalties réussis",
    valueExtrator: (player) => {
      const totalWonPenalties =
        player.championships[1].total.stats.totalPenaltiesScored;
      const totalPenalties = player.championships[1].total.stats.totalPenalties;
      if (
        typeof totalPenalties === "number" &&
        typeof totalWonPenalties === "number"
      )
        return `${totalWonPenalties} / ${totalPenalties}`;
      else return "-";
    },
  },
];

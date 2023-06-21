import { MpgChampionshipPlayerPool } from "../types/mpg";

export const getPlayerFullName = (player: MpgChampionshipPlayerPool) => {
  if (player.firstName) return `${player.firstName} ${player.lastName}`;
  else return player.lastName;
};

export const getPositionLabel = (positionValue: number) => {
  switch (positionValue) {
    case 10:
      return "Gardien";
    case 20:
      return "Défenseur";
    case 21:
      return "Latéral";
    case 30:
      return "Milieu défensif";
    case 31:
      return "Milieu offensif";
    case 40:
      return "Attaquant";
    default:
      return "";
  }
};

export const getRateColor = (rate: number | undefined) => {
  if (rate === undefined) return "#969DAD";
  else if (rate >= 9) return "#60D33E";
  else if (rate >= 8) return "#61D33E";
  else if (rate >= 7) return "#89C552";
  else if (rate >= 6) return "#BDDF4F";
  else if (rate >= 5) return "#DCCA5F";
  else if (rate >= 4) return "#E1AB3E";
  else if (rate >= 3) return "#E7994C";
  else if (rate >= 1) return "#E97773";
  else return "#D44E47";
};

export const getQuotationColor = (quotation: number | undefined) => {
  if (quotation === undefined) return "#969DAD";
  else return "#60D33E";
};

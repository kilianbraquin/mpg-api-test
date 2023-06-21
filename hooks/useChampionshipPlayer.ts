import { useQuery } from "@tanstack/react-query";

import { MpgChampionshipPlayerResponse } from "../types/mpg";

export const useChampionshipPlayer = (playerId: string) => {
  const shortId = playerId.match(/_(?<id>\d+)/)?.groups?.id;

  const { isLoading, error, data } = useQuery({
    queryKey: ["championship-player", shortId],
    queryFn: () =>
      fetch(
        `https://api.mpg.football/api/data/championship-player-stats/mpg_championship_player_${shortId}/2022`
      ).then((res) => res.json() as Promise<MpgChampionshipPlayerResponse>),
  });

  return {
    isLoading,
    error,
    player: data || null,
  };
};

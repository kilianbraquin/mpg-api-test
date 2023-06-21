import { useQuery } from "@tanstack/react-query";

import { MpgChampionshipPlayersPoolResponse } from "../types/mpg";

export const useChampionshipPlayersPool = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["championship-players-pool"],
    queryFn: () =>
      fetch(
        "https://api.mpg.football/api/data/championship-players-pool/1"
      ).then(
        (res) => res.json() as Promise<MpgChampionshipPlayersPoolResponse>
      ),
  });

  return {
    isLoading,
    error,
    championshipPlayersPool: data?.poolPlayers || null,
  };
};

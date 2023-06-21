import { useQuery } from "@tanstack/react-query";

import { MpgChampionshipClubsResponse } from "../types/mpg";

export const useChampionshipClubs = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["championship-clubs"],
    queryFn: () =>
      fetch("https://api.mpg.football/api/data/championship-clubs").then(
        (res) => res.json() as Promise<MpgChampionshipClubsResponse>
      ),
  });

  return {
    isLoading,
    error,
    championshipClubs: data?.championshipClubs || null,
  };
};

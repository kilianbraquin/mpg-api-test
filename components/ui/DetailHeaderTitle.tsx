import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useChampionshipClubs } from "../../hooks/useChampionshipClubs";
import { useChampionshipPlayersPool } from "../../hooks/useChampionshipPlayersPool";
import { getPlayerFullName, getPositionLabel } from "../../utils/player";

export type DetailHeaderTitleProps = {
  playerId: string;
};

export const DetailHeaderTitle: React.FC<DetailHeaderTitleProps> = ({
  playerId,
}) => {
  const { championshipPlayersPool } = useChampionshipPlayersPool();
  const { championshipClubs } = useChampionshipClubs();

  const playerData = useMemo(
    () =>
      championshipPlayersPool
        ? championshipPlayersPool.find((player) => player.id === playerId)
        : null,
    [playerId, championshipPlayersPool]
  );

  const clubData = useMemo(
    () =>
      playerData && championshipClubs
        ? championshipClubs[playerData.clubId]
        : null,
    [playerData, championshipClubs]
  );

  if (!playerData) return null;
  else
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: clubData?.defaultJerseyUrl,
          }}
        />
        <View>
          <Text style={styles.title}>{getPlayerFullName(playerData)}</Text>
          <Text style={styles.description}>{`${
            clubData?.name["fr-FR"]
          } - ${getPositionLabel(playerData.ultraPosition)}`}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 32,
    height: 32,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "white",
    fontWeight: "300",
  },
});

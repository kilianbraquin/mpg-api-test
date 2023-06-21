import React, { useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Rating } from "./Rating";
import {
  MpgChampionshipClub,
  MpgChampionshipPlayerPool,
} from "../../types/mpg";
import { getPlayerFullName, getPositionLabel } from "../../utils/player";

export type PlayerItemProps = {
  player: MpgChampionshipPlayerPool;
  club: MpgChampionshipClub;
  onPress?: () => void;
};

export const PlayerItem: React.FC<PlayerItemProps> = ({
  club,
  player,
  onPress,
}) => {
  const name = useMemo(() => getPlayerFullName(player), [player]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: club.defaultAssets?.logo.medium,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>{club.name["fr-FR"]}</Text>
        <Text>{getPositionLabel(player.ultraPosition)}</Text>
      </View>
      <Rating value={player.stats.averageRating} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
});

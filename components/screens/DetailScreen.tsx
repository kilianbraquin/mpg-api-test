import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LoadingScreen } from "./LoadingScreen";
import { useChampionshipPlayer } from "../../hooks/useChampionshipPlayer";
import { useChampionshipPlayersPool } from "../../hooks/useChampionshipPlayersPool";
import { RootStackParamList } from "../../types/navigation";
import { listDisplayStatistics } from "../../utils/stats";
import { DetailKeyStatistics } from "../ui/DetailKeyStatistics";

export const DetailScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, "Detail">
> = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { player } = useChampionshipPlayer(route.params.playerId);
  const { championshipPlayersPool } = useChampionshipPlayersPool();

  const playerPoolData = useMemo(() => {
    if (player && championshipPlayersPool)
      return championshipPlayersPool.find(
        (item) => route.params.playerId === item.id
      );
  }, [route.params.playerId, championshipPlayersPool, player]);

  if (!player || !playerPoolData) return <LoadingScreen />;
  else
    return (
      <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
        <DetailKeyStatistics
          quotation={playerPoolData.quotation}
          rating={player.championships["1"].keySeasonStats.averageRating}
        />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
          data={listDisplayStatistics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{item.label}</Text>
              <Text style={styles.itemValue}>{item.valueExtrator(player)}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.itemDivider} />}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 16,
  },
  listContent: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D7DAE6",
    borderRadius: 8,
  },
  itemDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#D7DAE6",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemValue: {
    fontWeight: "bold",
  },
});

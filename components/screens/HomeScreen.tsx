import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LoadingScreen } from "./LoadingScreen";
import { useChampionshipClubs } from "../../hooks/useChampionshipClubs";
import { useChampionshipPlayersPool } from "../../hooks/useChampionshipPlayersPool";
import { RootStackParamList } from "../../types/navigation";
import { getPlayerFullName } from "../../utils/player";
import { PlayerItem } from "../ui/PlayerItem";

export const HomeScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, "Home">
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const { championshipClubs } = useChampionshipClubs();
  const { championshipPlayersPool } = useChampionshipPlayersPool();

  const filteredPlayers = useMemo(() => {
    const reg = new RegExp(
      searchText.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      "i"
    );
    return (
      championshipPlayersPool?.filter((player) => {
        const fullName = getPlayerFullName(player)
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return fullName.match(reg) !== null;
      }) ?? null
    );
  }, [searchText, championshipPlayersPool]);

  if (championshipClubs === null || filteredPlayers === null) {
    return <LoadingScreen />;
  } else {
    return (
      <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder={"Rechercher un joueur par son nom"}
          />
        </View>
        <FlatList
          style={styles.listContainer}
          data={filteredPlayers}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemDivider} />}
          renderItem={({ item }) => (
            <PlayerItem
              club={championshipClubs[item.clubId]}
              player={item}
              onPress={() => {
                navigation.navigate("Detail", {
                  playerId: item.id,
                });
              }}
            />
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    margin: 16,
  },
  searchInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D7DAE6",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#D7DAE6",
    backgroundColor: "white",
  },
  itemDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#D7DAE6",
  },
});

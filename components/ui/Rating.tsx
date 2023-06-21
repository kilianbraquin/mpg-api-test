import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { getRateColor } from "../../utils/player";

export type RatingProps = {
  value: number | undefined;
};

export const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: getRateColor(value) }}>
      <Text style={styles.text}>{value?.toFixed(1) || "-"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Quotation } from "./Quotation";
import { Rating } from "./Rating";

export type DetailKeyStatisticsProps = {
  quotation?: number;
  rating?: number;
};

export const DetailKeyStatistics: React.FC<DetailKeyStatisticsProps> = ({
  rating,
  quotation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text style={styles.label}>Note moyenne</Text>
        <Rating value={rating} />
      </View>
      <View style={styles.cell}>
        <Text style={styles.label}>Cote</Text>
        <Quotation value={quotation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D7DAE6",
    borderRadius: 8,
    flexDirection: "row",
  },
  cell: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRightWidth: 1,
    borderRightColor: "#D7DAE6",
    flex: 1,
  },
  label: {
    fontWeight: "600",
  },
});

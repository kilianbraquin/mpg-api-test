import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { getQuotationColor } from "../../utils/player";

export type QuotationProps = {
  value: number | undefined;
};

export const Quotation: React.FC<QuotationProps> = ({ value }) => {
  return (
    <View
      style={{ ...styles.container, backgroundColor: getQuotationColor(value) }}
    >
      <Text style={styles.text}>{value || "-"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
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

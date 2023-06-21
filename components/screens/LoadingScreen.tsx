import React from "react";
import { ActivityIndicator, View } from "react-native";

export const LoadingScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  );
};

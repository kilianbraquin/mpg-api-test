import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { DetailScreen } from "./components/screens/DetailScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { DetailHeaderTitle } from "./components/ui/DetailHeaderTitle";
import { RootStackParamList } from "./types/navigation";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              card: "#6DC658",
              text: "white",
              border: "#00000000",
              primary: "white",
              background: "#F4F6F8",
              notification: DefaultTheme.colors.notification,
            },
          }}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Liste des joueurs" }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={({ route }) => ({
                headerTitle: () => (
                  <DetailHeaderTitle playerId={route.params.playerId} />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

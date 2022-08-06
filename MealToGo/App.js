/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontlato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { MapScreen } from "./src/Features/Restaurant/Screens/map.screen";
import { SettingScreen } from "./src/Features/Restaurant/Screens/setting.screen";
import { restauratRequests } from "./src/Services/Restaurant/restaurant.services";
import { RestaurantContextProvider } from "./src/Services/Restaurant/restaurant.context";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "ios-home",
  Map: "map-sharp",
  Setting: "settings-sharp",
};
export default function App() {
  const [oswaldLoaded] = useFontOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFontlato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>

      <ThemeProvider theme={theme}>
        {/* <RestaurantScreen></RestaurantScreen> */}
        <RestaurantContextProvider>
        <NavigationContainer>
          
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurant") {
                  iconName = TAB_ICON.Restaurant;
                } else if (route.name === "Map") {
                  iconName = TAB_ICON.Map;
                } else {
                  iconName = TAB_ICON.Setting;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{ tabBarBadge: 5 }}
            />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
    </>
  );
}

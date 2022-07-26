/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AppLoading from 'expo-app-loading';
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
import { View,Text } from "react-native";
function RestaurantScreens() {
  return (
    <RestaurantScreen></RestaurantScreen>
  );
}
function MapScreens() {
  return <MapScreen></MapScreen>
}
function SettingScreens() {
  return <SettingScreen></SettingScreen>
}
const Tab = createBottomTabNavigator()
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
      </ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen  name="Restaurant"  component={RestaurantScreens} options={{ tabBarBadge: 5 }}/>
          <Tab.Screen name="Map"  component={MapScreens} />
          <Tab.Screen name="Setting"  component={SettingScreens}/>
          </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}

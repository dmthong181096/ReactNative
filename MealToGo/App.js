/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
// import AppLoading from 'expo-app-loading';
import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontlato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
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
        <RestaurantScreen></RestaurantScreen>
      </ThemeProvider>
    </>
  );
}

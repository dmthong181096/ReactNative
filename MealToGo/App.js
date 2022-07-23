/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
// const isAndroid =
// console.log(StatusBar.currentHeight)
export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantScreen></RestaurantScreen>
      </ThemeProvider>
    </>
  );
}

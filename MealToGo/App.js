/* eslint-disable react/react-in-jsx-scope */
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as a from "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontlato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { RestaurantContextProvider } from "./src/Services/Restaurant/restaurant.context";
import { LocationContextProvider } from "./src/Services/location/location.context";
import { Navigator } from "./src/infrastructure/navigation/index.navigator";
import { FavouritesContextProvider } from "./src/Services/Favourites/favourites.context";

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}

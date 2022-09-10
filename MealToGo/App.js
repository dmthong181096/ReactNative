/* eslint-disable react/react-in-jsx-scope */
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
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
import { AuthenticationContextProvider } from "./src/Services/Authentication/authentication.context";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVb1WucJdenCnJfqnjp-gNUvQOz5kYkoM",
  authDomain: "mealstogorn-27904.firebaseapp.com",
  projectId: "mealstogorn-27904",
  storageBucket: "mealstogorn-27904.appspot.com",
  messagingSenderId: "327213360444",
  appId: "1:327213360444:web:230ae562cc727f81c3ea39",
};

// Initialize Firebase
const app = null;
if (!app) {
  const app = initializeApp(firebaseConfig);
}

export default function App() {
  // const [isAuthenticated, setIsAuthennticated] = useState(false)
  // useEffect(() => {
  //   const auth = getAuth()
  //   signInWithEmailAndPassword(auth, "demo@gmail.com", "123456")
  //     .then((userCredential) => {
  //       setIsAuthennticated(true)
  //       const user = userCredential.user;
  //     })
  //     .catch((error) => {
  //       setIsAuthennticated(false)
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // }, [])

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
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}

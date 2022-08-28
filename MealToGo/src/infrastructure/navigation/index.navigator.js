import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../Services/Authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";


export const Navigator = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator/>}
        </NavigationContainer>
    )

}
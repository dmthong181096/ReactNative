import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ImageBackground } from "react-native";
import { AccountScreen } from "../../Features/Account/Screens/account.screen";
import { LoginScreen } from "../../Features/Account/Screens/login.screen";
import { RegisterScreen } from "../../Features/Account/Screens/register.screen";

export const Stack = createStackNavigator();


export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Account" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

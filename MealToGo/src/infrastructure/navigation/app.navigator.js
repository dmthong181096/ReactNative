import React from "react";

// import { SettingScreen } from "./src/Features/Restaurant/Screens/setting.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {SettingScreen} from "../../Features/Restaurant/Screens/setting.screen"
import { RestaurantScreen } from  "../../Features/Restaurant/Screens/restaurant.screen";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../Features/Map/Screens/map.screen";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "ios-home",
  Map: "map-sharp",
  Setting: "settings-sharp",
};
export const AppNavigator=() =>{
  return (
    <Tab.Navigator
      screenOptions={ ({ route }) => ({headerShown: false,
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
          return (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Restaurant"
        component={RestaurantsNavigator}
        options={{ tabBarBadge: 5 }}
      />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )

}
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { RestaurantScreen } from "../../Features/Restaurant/Screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../Features/Restaurant/Screens/restaurantDetail.screen";
import { Text } from "react-native";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{  ...TransitionPresets.ModalPresentationIOS }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantsDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  );
};

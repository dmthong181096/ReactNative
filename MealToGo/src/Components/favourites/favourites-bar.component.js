import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CompactRestaurantInfoCard } from "../../Features/Map/Components/compactRestaurant-info-card.components";

export const FavouritesBar = ({ navigation, favourites }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.placeId;
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                navigation.navigate("RestaurantsDetail", {
                  restaurantInfo: restaurant,
                });
              }}
            >
              <CompactRestaurantInfoCard restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

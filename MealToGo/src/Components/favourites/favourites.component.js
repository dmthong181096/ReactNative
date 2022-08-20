import React, { useContext, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FavouritesContext } from "../../Services/Favourites/favourites.context";
const FavouritesButton = styled(TouchableOpacity)`
    zIndex: 100;
    top: 15px   
    right: 15px;
    position: absolute;
`;
export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (item) => item.placeId == restaurant.placeId
  );
  return (
    <FavouritesButton>
      <Ionicons
        name="heart-circle-outline"
        size={40}
        color={isFavourite ? "red" : "white"}
        onPress={() => {
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant);
        }}
      ></Ionicons>
    </FavouritesButton>
  );
};

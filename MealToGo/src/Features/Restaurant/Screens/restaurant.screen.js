// import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
    SafeAreaView,
    View,
    StatusBar,
    FlatList,
    Text,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { FAB, Searchbar } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { RestaurantContext } from "../../../Services/Restaurant/restaurant.context";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.components";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../Components/search/search.component";
import { FavouritesContext } from "../../../Services/Favourites/favourites.context";
import { FavouritesBar } from "../../../Components/favourites/favourites-bar.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const Header = styled(View)`
  flex: 0.05;
  padding: ${theme.space[3]};
`;
const Body = styled(View)`
  flex: 1;
  padding: ${theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  flex: 1;
  justifycontent: center;
  aligncontent: center;
`;
const RestaurantList = styled(FlatList)``;
const DATA = [
    {
        id: 1,
        name: "Restaurant 1",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "100 Some randoom street",
        isOpenNow: true,
        rating: 5,
        isClosedTemporarily: true,
    },
    {
        id: 2,
        name: "Restaurant 2",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "200 Some randoom street",
        isOpenNow: true,
        rating: 4,
        isClosedTemporarily: true,
    },
    {
        id: 3,
        name: "Restaurant 3",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "3 Some randoom street",
        isOpenNow: true,
        rating: 3,
        isClosedTemporarily: false,
    },
    {
        id: 4,
        name: "Restaurant 3",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "3 Some randoom street",
        isOpenNow: true,
        rating: 3,
        isClosedTemporarily: false,
    },
    {
        id: 5,
        name: "Restaurant 3",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "3 Some randoom street",
        isOpenNow: true,
        rating: 3,
        isClosedTemporarily: false,
    },
    {
        id: 6,
        name: "Restaurant 3",
        // icon,
        photos: ["https://picsum.photos/700"],
        address: "3 Some randoom street",
        isOpenNow: true,
        rating: 3,
        isClosedTemporarily: false,
    },
];

export const RestaurantScreen = ({ navigation }) => {
    const { isLoading, error, restaurants, placeId } =
        useContext(RestaurantContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggleFavourites, setIsToggleFavourites] = useState(false);
    return (
        <SafeArea>
            <Header>
                <Search
                    isFavouritesToggle={isToggleFavourites}
                    onFavouritesToggle={() => {
                        setIsToggleFavourites(!isToggleFavourites);
                    }}/>
            </Header>
            <Body>
                {isToggleFavourites ? (
                    <FavouritesBar navigation={navigation} favourites={favourites} />
                ) : null}
                {isLoading ? (
                    <Loading animating={true} size="150" />
                ) : (
                    <RestaurantList
                        data={restaurants}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("RestaurantsDetail", {
                                            restaurantInfo: item,
                                        });
                                    }}
                                >
                                    <RestaurantInfoCard restaurant={item} />
                                </TouchableOpacity>
                            );
                        }}
                    />
                )}
            </Body>
        </SafeArea>
    );
};

// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, FlatList } from "react-native";
import { FAB, Searchbar } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.components";

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


export const RestaurantScreen = () => {
  const [searchData, setSearchData] = useState("");
  const onChangeText = (text) => setSearchData(text);

  return (
    <SafeArea>
      <Header>
        <Searchbar
          onChangeText={onChangeText}
          placeholder={"Search"}
          value={searchData}
        ></Searchbar>
      </Header>
      <Body>
        <RestaurantList
          data={DATA}
          renderItem={(item) => (
            <RestaurantInfoCard restaurant={DATA[item.index]} />
          )}
          keyExtractor={(item) => item.id}
        />
      </Body>
    </SafeArea>
  );
};

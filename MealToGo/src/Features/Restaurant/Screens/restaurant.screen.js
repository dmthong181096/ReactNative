// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.components";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const Header = styled(View)`
  flex: 0.05;
  padding: 20px;
`;
const Body = styled(View)`
  flex: 0.95;
  padding: 20px;
`;
// const isAndroid = function () {
//   Platform.OS === "android";
// };
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
        <RestaurantInfoCard></RestaurantInfoCard>
        <RestaurantInfoCard></RestaurantInfoCard>
      </Body>
    </SafeArea>
  );
};

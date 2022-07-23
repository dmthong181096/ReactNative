// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
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
  flex: 0.95;
  padding: ${theme.space[3]};
`;
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
        <RestaurantInfoCard restaurant={""}></RestaurantInfoCard>
        <RestaurantInfoCard></RestaurantInfoCard>
      </Body>
    </SafeArea>
  );
};

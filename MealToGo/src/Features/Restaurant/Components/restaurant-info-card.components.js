import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
// import { theme } from "../../../infrastructure/theme";
const Title = styled(Text)`
  padding: 16px;
  fontSize: 20px;
  color: ${(props) => props.theme.colors.ui.primary}
`;
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantCard = styled(Card)`
  marginBottom: 20px;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Some randoom street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          source={{ uri: photos[0] }}
          key={name}
        />
        <Title >{name}</Title>
      </RestaurantCard>
    </>
  );
};

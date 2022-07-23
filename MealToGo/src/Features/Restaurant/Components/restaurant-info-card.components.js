import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
const Title = styled(Text)`
  padding: ${theme.space[3]};
  fontSize: ${theme.space[3]};
  color: ${theme.colors.ui.primary}
  fontFamily: ${theme.fonts.body}
`;
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantCard = styled(Card)`
  marginBottom: ${theme.space[4]};
`;
export const RestaurantInfoCard = ({ 
  restaurant = {}
 }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = ["https://picsum.photos/700"],
    // address = "100 Some randoom street",
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemporarily = false,
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

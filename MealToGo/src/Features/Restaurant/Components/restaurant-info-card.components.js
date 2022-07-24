import React from "react";
import { Text,View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
const Title = styled(Text)`

  fontSize: ${theme.fontSizes.body};
  color: ${theme.colors.ui.primary}
  fontFamily: ${theme.fonts.heading}
`;
const Address = styled(Text)`
fontFamily: ${theme.fonts.body}
fontSize: ${theme.fontSizes.caption}

`
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantCard = styled(Card)`
  marginBottom: ${theme.space[3]};
`;
const Info = styled(View)`
padding: ${theme.space[2]}
`
export const RestaurantInfoCard = ({ 
  restaurant = {}
 }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Some randoom street",
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
        <Info>
        <Title >{name}</Title>
        <Address>{address}</Address>
        </Info>
        
      </RestaurantCard>
    </>
  );
};

import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourites } from "../../../Components/favourites/favourites.component";

const Title = styled(Text)`

    fontSize: ${theme.fontSizes.body};
    color: ${theme.colors.ui.primary}
    fontFamily: ${theme.fonts.heading}
`;
const Address = styled(Text)`
    fontFamily: ${theme.fonts.body}
    fontSize: ${theme.fontSizes.caption}

`;
const RestaurantCardCover = styled(Card.Cover)``;
const RestaurantCard = styled(Card)`
  margin-bottom: ${theme.space[3]};
`;
const Info = styled(View)`
  padding: ${theme.space[2]};
`;
const Star = styled(View)`
    flex-direction: row
    alignItems: center
    justifyContent: center
`;
const StatusOpen = styled(View)`
    flex:1
    flex-direction: row
    alignItems: center
    justifyContent: flex-end
`;
const Rating = styled(View)`
  flex-direction: row;
`;
const CloseTemporarily = styled(Text)`
    color: ${theme.colors.ui.error}
    marginRight: ${theme.space[2]}
    alignItems: center
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Some randoom street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <Favourites restaurant={restaurant}></Favourites>
        <RestaurantCardCover source={{ uri: photos[0] }} key={name} />

        <Info>
          <Title>{name}</Title>
          <Rating>
            <Star>
              {ratingArray.map((e, index) => (
                <SvgXml key={index} width="20" height="20" xml={star} />
              ))}
            </Star>

            <StatusOpen>
              {isClosedTemporarily && (
                <CloseTemporarily>CLOSED TEMPORARILY</CloseTemporarily>
              )}

              {isOpenNow && <SvgXml width="30" height="30" xml={open} />}
            </StatusOpen>
          </Rating>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

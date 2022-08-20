import React from "react";
import {  Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { TouchableOpacity } from "react-native-gesture-handler";

const Title = styled(Text)`

    fontSize: ${theme.fontSizes.body};
    color: ${theme.colors.ui.primary}
    fontFamily: ${theme.fonts.heading}
`;


export const CompactRestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = ["https://picsum.photos/700"],
    address = "100 Some randoom street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
        <Card style ={{marginRight:10}}>
            <Card.Cover source={{uri:photos[0]}}></Card.Cover>
            <Card.Content style={{top:10, alignItems:"center", justifyContent: "center"}} ><Text>{name}</Text></Card.Content>
        </Card>


  );
};


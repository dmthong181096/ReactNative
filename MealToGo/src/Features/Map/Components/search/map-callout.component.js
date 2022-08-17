import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const MapCallOut = ({restaurant})=>{
    return (
        <>
        <Card>
            <Card.Cover source={{url: restaurant.photos[0]}}></Card.Cover>
        </Card>
        <Text>{restaurant.name}</Text>
        </>
    )
}
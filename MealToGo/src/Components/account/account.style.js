import React from "react";
import { ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
export const  AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../assets/home_bg.jpg'),
    resizeMode: "cover",
})`
    flex: 1
`;
export const AccountOverlay= styled(View)`
    position: absolute;
    height: 100%;
    width: 100%;
    justifyContent: center;
    alignContent: center;
    backgroundColor: rgba(255,255,255,0.3)
`
export const AccountContainer= styled(View)`
    position: absulute;
    flex:0.25;
    margin:100px;
    justifyContent: center;
    alignContent: center;
    backgroundColor: rgba(255,255,255,0.9)
`
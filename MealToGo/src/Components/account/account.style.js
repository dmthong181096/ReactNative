import React from "react";
import { ImageBackground, View,Text } from "react-native";
import { Button,TextInput } from "react-native-paper";
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
    flex:0.4;
    margin:60px;
    borderRadius:10px;
    justifyContent: center;
    alignContent: center;
    backgroundColor: rgba(255,255,255,0.9)
`
export const AccountButton = styled(Button)`
    marginLeft: 20px;
    marginRight: 20px
    height: 15%;
    justifyContent: center;
    alignContent: center;
`
export const Input = styled(TextInput)`
    marginLeft: 20px;
    marginRight: 20px;
`;
export const Spacer = styled(View)`
    margin: 5px;
`
export const ErrorToast = styled(Text)`
    marginLeft: 20px;
    marginRight: 20px;
    marginBottom: 5px;
    color: red;
`
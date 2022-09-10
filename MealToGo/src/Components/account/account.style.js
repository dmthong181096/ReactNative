import React from "react";
import { ImageBackground, View,Text } from "react-native";
import { Button,TextInput } from "react-native-paper";
import styled from "styled-components";

export const  AccountView = styled(View)`
    flex: 1;
    justifyContent: center;
    alignContent: center;
    alignItem: center;
`
export const  AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../assets/home_bg.jpg'),
    resizeMode: "cover",
})`
height: 100%;
width: 100%;
    flex: 1;
    justifyContent: center;
    alignContent: center;
    alignItem: center;
`;
export const AccountOverlay= styled(View)`
    position: absolute;
    height: 100%;
    width: 100%;
    flex:1;
    justifyContent: center;
    alignContent: center;
    alignItem: center;
    backgroundColor: rgba(255,255,255,0.3)
`
export const AccountContainer= styled(View)`
    position: absulute;
    flex:0.5;

    margin:60px;
    borderRadius:10px;
    justifyContent: center;
    alignContent: left;

    backgroundColor: rgba(255,255,255,0.9)
`
export const AccountButton = styled(Button)`
    marginLeft: 20px;
    marginRight: 20px
    height: 15%;
    justifyContent: center;
    alignContent: center;

`
export const ButtonBack = styled(Button)`
    marginLeft: 150px;
    marginRight: 150px
    height:5%;

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
export const TitleContainer = styled(View)`
    margin: 5px;
`
export const Title = styled(Text)`
    marginLeft:50px;
    marginRight: 20px;
    fontSize:30px


`
export const AnimatioWrapper = styled(View)`
    width:100%;
    height:40%;
    position: absolute;
    top:20px
`
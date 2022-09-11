import React from "react";
import { View, Text ,Platform} from "react-native";
import {} from "react-native-paper";
import styled from "styled-components";
import { FooterCanLua } from "../Components/footerCanLua.screen";
import { HeaderCanLua } from "../Components/headerCanLua.screen";

const CanLuaContainer = styled(View)`
  flex: 1;
  flexDirection: column;
  justifyContent: space-between;
  ${Platform.OS == "android" ? `marginBottom:0px`:`marginBottom:0px`}

`;
const Header = styled(View)`
  flex: 0.1;
  position:absolute;

`;
const Body = styled(View)`
  flex: 0.7;
  backgroundColor: red;
`;
const Footer = styled(View)`
  flex: 0.35;

`;
export const CanLuaScreen = () => {
  return (
    <CanLuaContainer>
      <HeaderCanLua></HeaderCanLua>
      <Body></Body>
      <Footer>
        <FooterCanLua />
      </Footer>
    </CanLuaContainer>
  );
};

import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
} from "../../../Components/account/account.style";
const AuthButton = styled(Button)`
  marginLeft: 40px;
  marginRight: 40px;
`;
const Spacer = styled(View)`
  margin: 10px;
`
export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountOverlay>
        <AccountContainer>
          <AuthButton
            icon="login"
            mode="contained"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            LOGIN
          </AuthButton>
          <Spacer/>
          <AuthButton
            icon="lock-outline"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            REGISTER
          </AuthButton>
        </AccountContainer>
      </AccountOverlay>
    </AccountBackground>
  );
};

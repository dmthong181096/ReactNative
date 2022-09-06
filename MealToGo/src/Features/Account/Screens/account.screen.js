import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  Spacer,
  AccountButton
} from "../../../Components/account/account.style";
export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountOverlay>
        <AccountContainer>
          <AccountButton
            icon="login"
            mode="contained"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            LOGIN
          </AccountButton>
          <Spacer/>
          <AccountButton
            icon="lock-outline"
            mode="contained"
            onPress={() =>  navigation.navigate("Register")
          }
          >
            REGISTER
          </AccountButton>
        </AccountContainer>
      </AccountOverlay>
    </AccountBackground>
  );
};

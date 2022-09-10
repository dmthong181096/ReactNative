import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  Spacer,
  AccountButton,
  Title,
  TitleContainer,
  AccountView,
  AnimatioWrapper,
} from "../../../Components/account/account.style";
import LottieView from "lottie-react-native";
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountView>
        <AccountOverlay>
        <AnimatioWrapper>
            <LottieView
              autoPlay
              resizeMode="cover"
              source={require("../../../../assets/watermelon.json")}
            />
          </AnimatioWrapper>
          <AccountContainer>
            <Title>MEALS TO GO</Title>
            <Spacer></Spacer>
            <AccountButton
              icon="login"
              mode="contained"
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              LOGIN
            </AccountButton>
            <Spacer />
            <AccountButton
              icon="lock-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              REGISTER
            </AccountButton>
          </AccountContainer>
        </AccountOverlay>
      </AccountView>
    </AccountBackground>
  );
};

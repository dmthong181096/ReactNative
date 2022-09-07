import React, { useState, useContext } from "react";

import { TextInput } from "react-native-paper";
import styled from "styled-components";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  Spacer,
  AccountButton,
  Input,
  ErrorToast
} from "../../../Components/account/account.style";
import { View,Text } from "react-native";

export const LoginScreen = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <AccountBackground>
      <AccountOverlay>
        <AccountContainer>
          <Input
            label="Email"
            mode="Outlined"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitallize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer />
          <Input
            label="Password"
            mode="Outlined"
            secureTextEntry={isHidden}
            textContentType="password"
            right={
              <TextInput.Icon
                icon="eye"
                onPressIn={() => setIsHidden(false)}
                onPressOut={() => setIsHidden(true)}
              />
            }
            onChangeText={(text) => setPassword(text)}
          />
          <Spacer />
          {error && <ErrorToast>*{error}</ErrorToast>}
          <AccountButton
            icon="login"
            mode="contained"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            LOGIN
          </AccountButton>
        </AccountContainer>
      </AccountOverlay>
    </AccountBackground>
  );
};

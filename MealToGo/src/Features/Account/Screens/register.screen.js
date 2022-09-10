import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  AccountButton,
  Input,
  Spacer,
  ErrorToast,
  Title,
  ButtonBack
} from "../../../Components/account/account.style";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";

export const RegisterScreen = ({navigation}) => {
  const { onRegister, error,isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AccountBackground>
      <AccountOverlay>
        <AccountContainer>
        <Title>MEALS TO GO</Title>
        <Spacer></Spacer>
          <Input
            label="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Spacer />
          <Input
            label="Password"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Spacer />
          <Input label="Confirm Password" 
          onChangeText={(text)=>{
            setConfirmPassword(text)
          }}
          
          />
          <Spacer />
          {error && <ErrorToast>{error}</ErrorToast>}
          <AccountButton
            icon="lock"
            loading = {isLoading}
            mode="contained"
            onPress={() => onRegister(email, password,confirmPassword)}
          >
            REGISTER
          </AccountButton>
        </AccountContainer>
        <ButtonBack
            icon="login"
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}
          >
            BACK
          </ButtonBack>
      </AccountOverlay>
    </AccountBackground>
  );
};

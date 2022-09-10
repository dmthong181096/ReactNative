import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  Spacer,
  AccountButton,
  Input,
  ErrorToast,
  Title,
  ButtonBack
} from "../../../Components/account/account.style";
export const LoginScreen = ({navigation}) => {
  const [isHidden, setIsHidden] = useState(true);
  const { onLogin, error,isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountBackground>
      <AccountOverlay>
      
        <AccountContainer>
        <Title>MEALS TO GO</Title>
        <Spacer></Spacer>
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
          loading = {isLoading}
            icon="login"
            mode="contained"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            LOGIN
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

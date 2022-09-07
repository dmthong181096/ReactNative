import React, { useState ,useContext} from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  AccountButton,
  Input,
  Spacer,
  ErrorToast,
} from "../../../Components/account/account.style";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";

export const RegisterScreen = () => {
  const {onRegister,error}  = useContext(AuthenticationContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <AccountBackground>
      <AccountOverlay>
        <AccountContainer>
          <Input label="Email" onChangeText={(text)=>{setEmail(text)}}/>
            <Spacer />
          <Input label="Password" onChangeText={(text)=>{setPassword(text)}}/>
            <Spacer />
          <Input label="Confirm Password"/>
          <Spacer/>
          {error && <ErrorToast>{error}</ErrorToast>}
          <AccountButton icon="lock" mode="contained" onPress={()=>onRegister(email,password)}>REGISTER</AccountButton>
        </AccountContainer>
      </AccountOverlay>
    </AccountBackground>
  );
};

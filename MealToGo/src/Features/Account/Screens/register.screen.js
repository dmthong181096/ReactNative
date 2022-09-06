import React, { useState ,useContext} from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  AccountBackground,
  AccountOverlay,
  AccountContainer,
  AccountButton,
  Input,
  Spacer,
} from "../../../Components/account/account.style";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";

export const RegisterScreen = () => {
  const {onRegister}  = useContext(AuthenticationContext)
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
          <AccountButton icon="lock" mode="contained" onPress={()=>onRegister(email,password)}>REGISTER</AccountButton>
        </AccountContainer>
      </AccountOverlay>
    </AccountBackground>
  );
};

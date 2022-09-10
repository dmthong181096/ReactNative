import React, {useContext} from "react";
import { View, Text,Button } from "react-native";
import { AccountButton } from "../../../Components/account/account.style";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";



export const SettingScreen = () => {
    const {onLogout} = useContext(AuthenticationContext)
    return (
        <View style ={{justifyContent:"center",flex:1}}>
            <AccountButton mode="contained" onPress={()=>onLogout()} >LOGOUT</AccountButton>
            {/* <Button  onPress={()=>{onLogout()}}><Text>Settinng Screens</Text></Button> */}
        </View>
        
    )
}
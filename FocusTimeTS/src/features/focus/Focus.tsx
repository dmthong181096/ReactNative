import { View, StyleSheet, Text, TextInput,Dimensions } from "react-native";
import React, { useState } from "react";
import { RoundedButton } from "../../components/RoundedButton";



export const Focus = ({addWork}:any) => {

const [work, setWork] = useState("") 
    return (
        <View >
            <Text> What would you like to focus on?</Text>
            <View style ={styles.inputContainer}>
                <TextInput style={styles.input}
                    // onChangeText = {setWork}
                    onChangeText = {setWork}
                    // onEndEditing = {addWork(work)}
                    // onSubmitEditing = {addWork(work)}
                    placeholder = "Input Work"
                   
                
                ></TextInput>
               
                <RoundedButton title="+" size={60} onPress={()=>{addWork(work)}}></RoundedButton>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        borderColor: "red",
        marginTop: 20,
        flexDirection: "row"
    },
    input: {
        backgroundColor: "white",
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get("window").width/1.5,
        marginRight: 10
    }
})

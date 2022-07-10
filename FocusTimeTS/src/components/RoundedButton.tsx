import React from "react";
import { Text,StyleSheet,View, TouchableOpacity } from "react-native";
 export const RoundedButton =({
    style = {},
    textStyles = {},
    size = 100,
    ...props
 }) => {
    return (
        <View>
            <TouchableOpacity style = {styles(size).radius} onPress = {props.onPress}>
                <Text style={styles(size).text}> 
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
 }
 const styles = (size: any) => StyleSheet.create({
    radius: {
        borderWidth: 1,
        borderRadius: size,
        width: size,
        height: size,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#E6E6FA"
    },
    text : {
        fontSize : size/3,
    }

 })
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
export const Timing = ({onChangTime}:any) => {
    return (
        <View style={styles.container}>
            <View style={styles.btnTiming}>
                <RoundedButton title={5} size={75} onPress = {()=>onChangTime(5)}></RoundedButton>
            </View>
            <View style={styles.btnTiming}>
                <RoundedButton title={10} size={75} onPress = {()=>onChangTime(10)}></RoundedButton>
            </View>
            <View style={styles.btnTiming}>
                <RoundedButton title={15} size={75} onPress = {()=>onChangTime(15)}></RoundedButton>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    btnTiming: {
        marginLeft: 10,
        marginRight: 10
    }
})
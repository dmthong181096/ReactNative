import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from '../../utils/sizes';

export const Timer = ({ focusSubject }) => {
    const [isStart, setIsStart] = useState(false)

    // const [titleBtn, setTitleBtn] = useState("Start")
    return (
        <View style={styles.container}>

            <View>
                <CountDown minutes={1} isPaused={!isStart}></CountDown>
            </View>

            <Text style={styles.title}>Timer goes here: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <View style={styles.btnAction}>
                {isStart ?
                    <RoundedButton title={"pause"} onPress={() => { setIsStart(!isStart) }}></RoundedButton> :
                    <RoundedButton title={"start"} onPress={() => { setIsStart(!isStart) }}></RoundedButton>}
            </View>
            



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: paddingSizes.xxl
    },
    title: {
        // flex: 0.5,
        marginTop: paddingSizes.xxxl,
        color: "white",
        fontSize: fontSizes.lg,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    },
    task: {
        // flex: 0.5,
        marginTop: paddingSizes.lg,
        color: "white",
        fontSize: fontSizes.lg,
        alignItems: "center",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
    },
    btnAction: {
        marginTop: paddingSizes.xxxl,
        alignItems: "center",
        justifyContent: "center"
    }
})
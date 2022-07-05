import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from '../../utils/sizes';
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1
export const Timer = ({ focusSubject, onTimerEnd , clearSubject}) => {
    useKeepAwake()
    const [minutes, setMinutes] = useState(DEFAULT_TIME)
    const [isStart, setIsStart] = useState(false)
    const [progressBar, setProgress] = useState(1)
    const onProgress1 = (progress) => {
        setProgress(progress)
    }
    const vibarate = () => {
        if (Platform.OS == "ios") {
            const interval = setInterval(() => Vibration.vibrate(), 1000)
            setTimeout(() => clearInterval(interval), 10000)
        } else {
            Vibration.vibrate(4000)
        }

    }
    const onEnd = () => {
        vibarate()
        setMinutes(DEFAULT_TIME)
        setProgress(1)
        setIsStart(false)
        onTimerEnd()
    }
    const changeTime = (min) => {
        setMinutes(min)
        setProgress(1)
        setIsStart(false)

    }
    // const [titleBtn, setTitleBtn] = useState("Start")
    return (
        <View style={styles.container}>

            <View >
                <CountDown minutes={minutes}
                    isPaused={!isStart}
                    onProgress={onProgress1}
                    onEnd={onEnd}
                >
                </CountDown>
            </View>

            <Text style={styles.title}>Timer goes here: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <View>
                <ProgressBar
                    progress={progressBar}
                    style={styles.progressBar}

                ></ProgressBar>
            </View>
            <View style={styles.btnTiming}>
                <Timing onChangeTime={changeTime}></Timing>
            </View>
            <View style={styles.btnAction}>
                {isStart ?
                    <RoundedButton title={"pause"} onPress={() => { setIsStart(!isStart) }}></RoundedButton> :
                    <RoundedButton title={"start"} onPress={() => { setIsStart(!isStart) }}></RoundedButton>}

            </View>
            <View style={styles.btnClearSubject}>
                <RoundedButton title={"-"} size={50} onPress={() => { clearSubject() }}></RoundedButton>
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
        justifyContent: "center",
        flexDirection: "row"

    },
    btnTiming: {
        // flex: 1,
        alignItems: "center",
        flexDirection: "row"
    },
    btnClearSubject: {
        marginLeft: paddingSizes.lg,
        // marginBottom: 100
        // marginTop: paddingSizes.xxxl,
        // justifyContent: "flex-end"
        alignItems: "flex-end"
    },
    progressBar: {
        marginTop: 30,
        color: '#5E84E2',
        height: 10
    }

})
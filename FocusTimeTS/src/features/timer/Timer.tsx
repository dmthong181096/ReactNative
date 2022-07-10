import { useKeepAwake } from "expo-keep-awake";
import React, { useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";

export const Timer = ({clear}:any) => {
    useKeepAwake();
    const [isStart , setIsStart] = useState(true)
    const [time, setTime] = useState(0.1)
    const [progress, setProgress] = useState(1)
    const vibration = (time:any)=> {
        Vibration.vibrate(time)
    }
    const onProgress: any =(progress:any)=> {
        setProgress(progress)
    }
    const onEnd:any = () => {
        vibration(400)
        setTime(0)

        
    }
    const changTime:any = (time:any)=> {
        setIsStart(false)
        setProgress(time)
        setTime(time)
        
        
    }
    const onClear:any =()=>{
        clear(null)
    }
    return (
        <View>
            <CountDown minustes={time} isPaused ={!isStart} progressBar = {onProgress} progress = {progress} onEnd={onEnd}></CountDown>

            <Timing onChangTime = {changTime}></Timing>
            <View style={styles.btnStart} >
                {isStart ? 
                <RoundedButton title="stop" size={150} onPress={()=>setIsStart(!isStart)}></RoundedButton>:
                <RoundedButton title="start" size={150} onPress={()=>setIsStart(!isStart)} ></RoundedButton>}
                
            </View>
            <View style={styles.btnClear}>
                <RoundedButton title="-" size={68} onPress = {()=>onClear()}></RoundedButton>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnStart: {
        marginTop: 40,
        alignItems: "center"
    },
    btnClear: {
        // marginTop: 20,
        alignItems: "flex-end"
    }
})

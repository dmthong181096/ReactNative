import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import { Timer } from "../features/timer/Timer";

const minuteToMilis: any = (minustes: any) => minustes * 1000 * 60
const formatTime: any = (time: any) => time < 10 ? `0${time}` : time
export const CountDown = ({
    minustes = 0.1,
    size = 300,
    isPaused = false,
    progressBar,
    progress,
    onEnd,
    // onProgress = null,


}:any) => {
    // const internal = React.useRef(1)
    let intervalCurrent:any
    const countDown = () => {
        setMilis((time:any) => {

            if (time <= 0) {
                setMilis(0)
                onEnd()
                return ()=> clearInterval(intervalCurrent)
            }
             time = time - 1000
             const percentProgress:any = time/ minuteToMilis(minustes)
             progressBar(percentProgress)
            return time
        }) 
    }
    useEffect (()=> {
        
        if (isPaused) {
            if (intervalCurrent) {
                clearInterval(intervalCurrent)
                console.log("PAUSE")
            }
            
        }else intervalCurrent = setInterval(countDown,1000)
            
        return ()=> clearInterval(intervalCurrent)
        
    },[isPaused])

    useEffect(() => {
        setMilis(minuteToMilis(minustes))
    }, [minustes])
    // const [progress, setProgress] = useState(1)
    const [mili, setMilis] = useState(minuteToMilis(minustes))
    const minutes = Math.floor(mili / 1000 / 60) % 60
    const seconds = Math.floor(mili / 1000) % 60
    return (
        <View style={styles(size).container}>
            <View style={styles(size).radius}>
                <Progress.Circle size={400}
                    indeterminate={false}
                    progress={progress}
                    thickness={5}
                    borderWidth={0}
                    color="#FFC125" 
                    direction= "counter-clockwise"
                    style={styles(size).progress}>
                </Progress.Circle>
                <Text style={styles(size).coutDown}>{formatTime(minutes)} : {formatTime(seconds)}</Text>
            </View>
        </View>
    )
}
const styles = (size: any) => StyleSheet.create({
    container: {
        marginTop: 100,

    },
    progress: {
        marginTop: -150,
    },
    radius: {
        borderWidth: 0.1,
        borderRadius: size,
        backgroundColor: "#E6E6FA",
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center"
    },
    coutDown: {
        fontSize: size / 4,
        marginTop: -250
    }
})
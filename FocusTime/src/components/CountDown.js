import React, {useState,useEffect} from "react";
import { Text ,View,StyleSheet} from "react-native";
const minutesToMillis = (minutes)=> minutes*1000*60
const formatTime = (time) => time<10 ? `0${time}` : time

export const CountDown = ({
    minutes = 1,
    isPaused,
    onProgress,
    onEnd,
    ...props

})=> {
    const interval = React.useRef(null)
    const countDown = ()=> {
        setMillis((time) => {
            if (time == 0) {
                clearInterval(interval.current)
                onEnd()
                return time
            }
            const timeLeft = time - 1000
            const percentProgress = timeLeft/minutesToMillis(minutes)
            onProgress(percentProgress)
            return timeLeft
        })

    }
    useEffect(()=>{
        setMillis(minutesToMillis(minutes))
    },[minutes])
    useEffect (()=> {
        if (isPaused) {
            if (interval.current) {
                clearInterval(interval.current)
                return
            }
        }
        interval.current = setInterval(countDown,1000)
        return ()=> clearInterval(interval.current)
    },[isPaused])
    const [milis, setMillis] = useState(minutesToMillis(minutes))
    const minute = Math.floor(milis/1000/60)% 60
    const seconds = Math.floor(milis/1000)% 60
    // setInterval(() => {
    //     seconds = seconds - 1
    // }, 1000);
    return (
        <View style = {styles.container}>

            <Text style = {styles.countDown}>{formatTime(minute)} : {formatTime(seconds)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    countDown: {
        // paddingTop: 100,
        marginTop: 100,
        textAlign: "center",
        color: "white",
        fontSize: 100,   
        fontWeight: "bold",
        backgroundColor: "#6495ED"
    }
})
import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { paddingSizes } from "../../utils/sizes";
const DEFAULT_TIME = 1
export const Timing = ({onChangeTime}) => {
    return (
        <>
            <View style={styles.timingButton}>
                <RoundedButton size={75} title={"10"} onPress={() => onChangeTime(1)}>

                </RoundedButton>


            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={75} title={"15"} onPress={() => onChangeTime(15)}>

                </RoundedButton>
            </View>
            <View style={styles.timingButton}>
                <RoundedButton size={75} title={"20"} onPress={() => onChangeTime(20)}>

                </RoundedButton>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        paddingTop: paddingSizes.lg,
        alignItems: "center"
    }
})
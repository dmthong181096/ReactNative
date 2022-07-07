
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes,paddingSizes } from '../../utils/sizes';
import { Timer } from '../timer/Timer';

export const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null)

    // const [focusSubject, setFocusSubject] = useState("null")
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
            </View>
            <View style={styles.inputContainer}>
                {/* <TextInput
                    style={{ flex: 1, marginRight: 15 }} 
                    onSubmitEditing={({ nativeEvent }) => { setTmpItem(nativeEvent.text)}}></TextInput> */}
                <TextInput
                    style={{ flex: 1, marginRight: 15 }}
                    onEndEditing = {()=>{addSubject(subject)}}
                    onSubmitEditing = {()=>{addSubject(subject)}}
                    onChangeText={setSubject}
                    ></TextInput>
                <RoundedButton title="+" size={60} onPress={() => { addSubject(subject) }}></RoundedButton>
            </View>

            {/* {focusSubject ?
            // <Text style={styles.workCotainer}>{focusSubject}</Text> 
            <Timer style={styles.workCotainer} focusSubject = {focusSubject}></Timer>
            :<Text style={styles.workCotainer}>No Thing</Text>} */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: paddingSizes.md,
        paddingTop: paddingSizes.xxxl,
        justifyContent: 'center',
    },
    titleContainer: {
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        color: "white",
        fontSize: fontSizes.xl,
        fontWeight: "bold"
    },
    inputContainer: {
        paddingTop: paddingSizes.md,
        flexDirection: "row",
        // paddingBottom: paddingSizes.md,
        alignItems: "center"
    },
    workCotainer:  {
        // flex: 1,
        color: "white",
        fontSize: fontSizes.lg,
        fontWeight: "normal",

    }
});

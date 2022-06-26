
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
    const [tmpItem, setTmpItem] = useState(null)
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
                    onEndEditing = {()=>{addSubject(tmpItem)}}
                    onSubmitEditing = {()=>{addSubject(tmpItem)}}
                    onChangeText={setTmpItem}
                    // onSubmitEditing = {setTmpItem}

                    ></TextInput>

                <RoundedButton title="+" size={60} onPress={() => { addSubject(tmpItem) }}></RoundedButton>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: 20,
        paddingTop: 100,
        justifyContent: 'center',
    },
    titleContainer: {
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold"
    },
    inputContainer: {
        paddingTop: 20,
        flexDirection: "row",
        paddingBottom: 20,
        alignItems: "center"
    }
});

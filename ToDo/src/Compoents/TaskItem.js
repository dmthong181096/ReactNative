import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Checkbox, Chip, IconButton } from 'react-native-paper';
export const TaskItem = ({
    Task,
    isChecked
}) => {
    // const [isChecked, setIsChecked] = useState(false)
    return(
        <>
        <Card mode="elevated" style={styles.card} elevation={5} onPress={()=>{console.log("Click Card")}}>
            <Card.Content style={{flexDirection: "row"}}>
                <Checkbox status={isChecked} ></Checkbox>
                <Title>{Task}</Title>
            </Card.Content>
        </Card>
        </>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: 10
    }
})
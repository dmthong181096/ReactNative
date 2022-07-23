import React from "react";
import { StyleSheet,View , Text} from "react-native";
import { Text as TextPaper} from 'react-native-paper';
export const Header =()=> {
    return(
        // <View>
                 <TextPaper variant="titleLarge" style={styles.title}>Today's Tasks</TextPaper>
                //  <Text>Today's Tasks</Text>
        // </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold"
    }
})
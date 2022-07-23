import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
export const Footer = () => {
  return (
    <View style={styles.Footer}>
      <View style={styles.Input}>
        <TextInput mode="outlined" label={"Input"}></TextInput>
      </View>
      <View
        style={{
          flex: 0.4,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {/* <Button  style = {styles.Button} mode="outlined" onPress={() => console.log("Pressed")} contentStyle={{fontSize:100}}>
            <Text style={styles.Text}>+</Text>
        </Button> */}
        <TouchableOpacity >
          <Text style={styles.Text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    flexDirection: "row",
  },
  Input: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  Button: {
   
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 15,
    padding: 30,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
  },
});

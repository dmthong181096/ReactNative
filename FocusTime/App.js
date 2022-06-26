import { StatusBar } from 'expo-status-bar';  
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View  style= {styles.bg}>
      <View></View>
      {/* <Focus></Focus> */}
      <Focus addSubject = {setFocusSubject}></Focus>
      {/* {focusSubject ? <Text>{focusSubject}</Text> :<Text>Clear</Text>} */}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',

  },
  bg: {
    flex: 1,
    backgroundColor: "#252250",
    // justifyContent: 'center',
    // padding: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
  }

});

import { StatusBar } from 'expo-status-bar';  
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View  style= {styles.bg}>

      {/* <Focus></Focus> */}
      {focusSubject ? <Text>{focusSubject}</Text> : <Focus addSubject = {setFocusSubject}></Focus>}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bg: {
    flex: 1,
    backgroundColor: "#252250",
    // justifyContent: 'center',
    padding: 8,
  }

});

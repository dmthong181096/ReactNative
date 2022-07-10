import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';




export default function App() {
  const [focusSubject,setFocusSubject] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
    <View >
      {/* <Text>Open up App.tsx to start working on your app!</Text>
       */}
       {focusSubject ? <Timer clear={()=>setFocusSubject(null)}></Timer>: <>
       <Text>{focusSubject}</Text>
       <Focus addWork = {setFocusSubject}></Focus></>}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

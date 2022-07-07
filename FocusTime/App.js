import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';

import { FocusHistory } from './src/features/focus/FocusHistory';

const STATUSES = {
  COMPLETE: 1,
  CANCEL: 0
}
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])
  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
    
  }
  const onClear = () => {
    //Thứ gì do
    setFocusHistory([])

  }

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject])
    }
  }, [focusSubject])
  console.log(focusHistory);


  return (
    <View style={styles.bg}>
      {/* <View></View> */}
      {/* <Focus></Focus> */}
      {/* <Focus addSubject = {setFocusSubject}></Focus> */}
      {focusSubject ? (<Timer focusSubject={focusSubject}
        onTimerEnd={() => { addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE); setFocusSubject(null) }}
        clearSubject={() => { addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCEL); setFocusSubject(null) }}
      ></Timer>) : 
      (<><Focus addSubject={setFocusSubject}/> 
      <FocusHistory focusHistory={focusHistory} onClear={onClear}/></>)}
    


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

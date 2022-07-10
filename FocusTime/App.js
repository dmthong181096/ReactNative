import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,AsyncStorageStatic } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';

import { FocusHistory } from './src/features/focus/FocusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STATUSES = {
  COMPLETE: 1,
  CANCEL: 2
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
  const saveFocusHistory = async() => {
    try {
      await AsyncStorage.setItem("focusHistory",JSON.stringify(focusHistory))
    } catch (error) {
      console.log(error);
    }
  }
  const loadFocusHistory = async() => {
    try {
      const history = await AsyncStorage.getItem("focusHistory")
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history))
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect( ()=> {
    loadFocusHistory()
  },[])
  useEffect( ()=> {
    saveFocusHistory()
  },[focusHistory])

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

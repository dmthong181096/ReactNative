// import React from 'react';
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const FlatListDemo = () => {
  const friends = [
    { name: "Friend #1", age: 1 },
    { name: "Friend #2", age: 2 },
    { name: "Friend #3", age: 3 },
    { name: "Friend #4", age: 4 },
    { name: "Friend #5", age: 5 },
    { name: "Friend #6", age: 6 },
    { name: "Friend #7", age: 7 },
    { name: "Friend #8", age: 8 },
    { name: "Friend #9", age: 9 },

  ]
  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle1}>{item.name} - Age: {item.age}</Text>
        }}

      >
      </FlatList>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 30,
    marginVertical: 40,
    alignContent: "center"
  }
})

export default FlatListDemo;
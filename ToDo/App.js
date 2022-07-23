import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TaskItem } from './src/Compoents/TaskItem';
import { Footer } from './src/Features/Footer';
import { Header } from './src/Features/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <Header></Header>
      </View>
      <View style={styles.body}>
          <TaskItem Task={"Học bài"} isChecked ="checked"></TaskItem>
          <TaskItem Task={"Đi nhậu"} isChecked ="checked"></TaskItem>
          <TaskItem Task={"Uống coffee"} isChecked ="checked"></TaskItem>
          <TaskItem Task={"Quánh vợ"} ></TaskItem>
          <TaskItem Task={"Ăn cơm"} ></TaskItem>
          
      </View>
      <View style={styles.footer}>
          <Footer></Footer>
      </View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  header: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingEnd: 50
  },
  body: {
    flex: 0.8,
    // backgroundColor: "red",
    marginTop: 20
  },
  footer: {
    marginTop: 10,
    flex: 0.15,
  }
});

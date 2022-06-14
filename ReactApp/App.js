import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Source/HomeScreen';
export default function App() {
  const name = "Thong"
  return (
   
    <View style={styles.container}>
      <Text style= {styles.textStyle1}>This is Style 1 with font size 45</Text>
      <Text style= {styles.textStyle2}>Hello {name},this is Style 2 with font size 30</Text>
      <Text> {Home()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle1: {
    fontSize: 35,
    backgroundColor: 'red'
  },
  textStyle2: {
    fontSize: 10
  }
});

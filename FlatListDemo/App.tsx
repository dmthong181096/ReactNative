// import { StatusBar } from 'expo-status-bar';z
import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native';
import FlatListDemo from './Source/FlatListDemo';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar /> */}
      {/* {FlatListDemo()} */}
      <Button title='"HomeScreen' onPress={() => {console.log("Hello! ")}}></Button>

      <Button title='"FlatList'></Button> 
      <TouchableOpacity ><Text>dsds</Text></TouchableOpacity>
    </View>
  );
}
// const navigatior = createStackNavigator( {

// })
 let SayHello = (name:String)=> {
  console.log("Hello! ", name)
}



const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

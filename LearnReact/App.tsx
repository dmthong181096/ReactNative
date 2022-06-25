import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/HomeScreen';
import TouchableOpacityDemo from './source/TouchOpacityDemo';

const Stack = createNativeStackNavigator(); 


// const navigator = createNativeStackNavigator(
//   {
//     Home: HomeScreen
//   },

// )  
// const MyStack = () => {
//   return (

//   );
// };
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   {/* {ButtonDemo()} */}
    //   {/* {TouchableOpacityDemo("s")} */}
    //   {HomeScreen()}
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={TouchableOpacityDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrSoundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const navigator = createStackNavigator(s
//   {
//     Btn: ButtonDemo
//   },{
//     initialRouteNName: "Btn"
//     defaultNavigationOptions: {
//       title: "App"
//     }
//   }
// )
// export default createAppConntaier(navigator)


import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,TouchableOpacity,Button } from "react-native";
// const HomeScreen = ( ) => {
//     return (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Profile', { name: 'Jane' })
//         }
//       >
//         <Text>Go go profile</Text>
//       </TouchableOpacity>
//     );
//   };


  const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
    
  };



export default HomeScreen;
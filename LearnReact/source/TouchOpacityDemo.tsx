import * as React from 'react';
import { TouchableOpacity, View ,Text    } from "react-native";
// React
import { NavigationContainer } from '@react-navigation/native';
const TouchableOpacityDemo = (props:any) => {
    console.log(props);

    return (
        <NavigationContainer>
            <TouchableOpacity onPress={() => console.log("Go to Flat List")}>
              <Text>GO TO FLAT LIST</Text>  
            </TouchableOpacity>
        </NavigationContainer>

    )
}

export default TouchableOpacityDemo;
// export default Demos;
import { Button,View } from "react-native";

const ButtonDemo = ()=> {
    return (
        <View>
            <Button title="Go to Home Scren"
                    onPress={()=> console.log("GO to Home Screen")
                     }
            
            
            ></Button>
        </View>
    )
}
export default ButtonDemo

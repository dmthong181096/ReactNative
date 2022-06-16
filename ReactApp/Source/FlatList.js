import React from "react";
import { FlatList, Text, View,StyleSheet } from "react-native";
const DemoFlatList = ()=> {
    const friends = [
        {name: "Thông" , key: "1"},
        {name: "Hoài" , key: "2"},
        {name: "Hưng", key: "3"},
        {name: "Minh", key: "4"},
        {name: "Phát", key: "5"},
        {name: "Toàn", key: "6"},
    ]
    // const fried2 = friends.slice(2,4)

    return ( 
       
        <FlatList 
        // keyExtractor={(friends) => friends.key}
        showsVerticalScrollIndicator = {false}
            data={friends}
            renderItem= {(element) => {

                return <Text style= {styles.style1}>{element.item.name}</Text>

            }}
        > 
        </FlatList>
    )
}
const styles = StyleSheet.create( {
    style1: {
        fontSize: 40        ,
        marginVertical: 80
    }
})
export default DemoFlatList;
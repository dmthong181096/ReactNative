import React, { useState,useContext } from "react";
import {Searchbar } from "react-native-paper";
import { LocationContext } from "../../Services/location/location.context";
export const Search=({
    
})=>{
    const {keyword,search} = useContext(LocationContext)
    // console.log(search)
    const onChangeText = (text) => {
        
        
        // if (!text.length) return
        // search(text)
        // locationContext.search = searchData
        //  console.log(locationContext )}
    }
    const [searchData, setSearchData] = useState(keyword);
    return (
        <Searchbar
        // onEndEditing={onChangeText}
        onSubmitEditing = {()=>{
           if (!searchData.length || searchData.trim()=="") return
            search(searchData)
        }}
        onChangeText= {(text)=>{
            
            setSearchData(text)
            
        }}
        placeholder={"Search"}
        value={searchData}
      ></Searchbar>
    )
}
import React, { useState,useContext, useEffect } from "react";
import {Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../Services/location/location.context";

export const Search=()=>{
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    return (
        <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    )
}
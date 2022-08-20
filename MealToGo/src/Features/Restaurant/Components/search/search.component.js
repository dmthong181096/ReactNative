import React, { useState,useContext, useEffect } from "react";
import {Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../Services/location/location.context";

export const Search=({
  isFavouritesToggle,
  onFavouritesToggle
}
)=>{
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    const [isFavourite,setIsFavourite] = useState(false);
    return (
        <Searchbar
        icon={isFavouritesToggle ? "heart": "heart-outline"}
        // iconColor={isFavourite ? "red" : "" }
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onIconPress = { onFavouritesToggle}
      />
    )
}
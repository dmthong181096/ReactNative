import React, { useState,useContext, useEffect } from "react";
import { View } from "react-native";
import {Searchbar } from "react-native-paper";

import styled from "styled-components";
import { LocationContext } from "../../../../Services/location/location.context";

const SearchbarContainer = styled(View)`
  // position: absolute;
  z-index: 999;
  marginTop: 110px;
  justifycontent: center;
  aligncontent: center;
  marginLeft: 15px
  marginRight: 15px
  
`

export const Search=()=>{
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    return (
      <SearchbarContainer>
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
      </SearchbarContainer>
    )
}
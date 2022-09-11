import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";
import styled from "styled-components";

export const FooterContainer = styled(View)`
    flex:1;
    backgroundColor: white;
    justifyContent: space-evenly;
    alignContent: flex-end;

`;
export const Spacer = styled(View)`
    margin: 3.2px;
`;
export const ListBaoHienTai = styled(View)`

    justifyContent: space-between;
    alignContent: center;
    flexDirection: row;
`;
export const Total = styled(View)`
    justifyContent: space-between;
    alignContent: center;
    alignItems: center ;
    flexDirection: row;
`;
export const ItemText = styled(Text)`
    fontSize: 32px;
    backgroundColor: gray;
    borderRadius: 10px;
    textAlign: center
`
const styles = StyleSheet.create({
    demo:{
        justifyContent: "space-evenly"
    }
})
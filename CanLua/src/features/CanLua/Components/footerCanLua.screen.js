import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import styled from "styled-components";
import {
  FooterContainer,
  Spacer,
  ListBaoHienTai,
  Total,
  ItemText,
} from "./footer.styles";
const DATA = [
  {
    id: 1,
    value: 0.0,
  },
  {
    id: 2,
    value: 0.0,
  },
  {
    id: 3,
    value: 0.0,
  },
  {
    id: 4,
    value: 0.0,
  },
  {
    id: 5,
    value: 0.0,
  },
];
const ItemTotalBao = () => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          height: 40,
          fontSize: 20,
          paddingTop: 7,
          width: 180,
          color:"blue"
        }}
      >
        35 Bao
      </Text>
    </TouchableOpacity>
  );
};

const ItemTotalKg = () => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          height: 40,
          fontSize: 20,
          paddingTop: 7,
          width: 180,
          color:'red'
        }}
      >
        3500Kg
      </Text>
    </TouchableOpacity>
  );
};
const ItemBaoHienTai = (value,key) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
      }}
      key = {key}
    >
      <Text
        style={{
          textAlign: "center",
          height: 40,
          fontSize: 20,
          paddingTop: 7,
          width: 72,
        }}

      >
        {value.toFixed(1)}
      </Text>
    </TouchableOpacity>
  );
};

export const FooterCanLua = () => {
  return (
    <FooterContainer>
      <Total>
        <ItemTotalBao></ItemTotalBao>
        <ItemTotalKg></ItemTotalKg>
      </Total>

      <ListBaoHienTai>
        {DATA.map((item,key)=>{
          return ItemBaoHienTai(item.value,key)
        })}
      </ListBaoHienTai>
      <TextInput
        mode="outlined"
        label={"Nhập số cân (kg)"}
        keyboardType="number-pad"
      ></TextInput>
    </FooterContainer>
  );
};
const styles = StyleSheet.create({
  demo: {
    flexDirection: "column",
  },
});

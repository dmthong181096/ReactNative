import React, { useState } from "react";
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
    value: 13,
  },
];
const setData = (index,value) =>{
  if (value.length<=0 || isNaN(value)) {
    return
  }
    if (indexBaoHienTai==0) {
      resetData()
    }
    DATA[index].value = parseFloat(value)
    indexBaoHienTai++
    if (indexBaoHienTai>=DATA.length) {
      indexBaoHienTai=0
    }
}
const resetData = () =>{
  DATA.forEach((item)=>{
    item.value = 0.0
  })
}

let indexBaoHienTai = 0


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
        {value!=undefined && value.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};
const indexBaoHiennTai = 0;

export const FooterCanLua = () => {
  const [kgHienTai, setKgHienTai] = useState(null)
  const [index,setIndex ] = useState(0)
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
        value= {kgHienTai}
        keyboardType="number-pad"
        onChangeText={(text)=>setKgHienTai(text)}
        right ={<TextInput.Icon
          icon="send"
          onPress={ ()=>{
            setData(index,kgHienTai)
            setKgHienTai("")
            // indexBaoHiennTai = indexBaoHiennTai+1
            setIndex(indexBaoHienTai)
          }}
          onPressIn={() => {}}
          onPressOut={() => {}}
        />}
      ></TextInput>
    </FooterContainer>
  );
};
const styles = StyleSheet.create({
  demo: {
    flexDirection: "column",
  },
});

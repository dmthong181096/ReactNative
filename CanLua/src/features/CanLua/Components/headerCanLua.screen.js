import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import styled from "styled-components";
import { HeaderContainer } from "./CanLua.styles";
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
    value: 1.2,
  },
  {
    id: 2,
    value: 2.3,
  },
  {
    id: 3,
    value: 3.5,
  },
  {
    id: 4,
    value: 4.6,
  },
  {
    id: 5,
    value: 5.1,
  },
];

export const HeaderCanLua = () => {
  return (
    <HeaderContainer>
      <Appbar.Header mode="small">
        <Appbar.BackAction />
        <Appbar.Content title="Cân Lúa" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </HeaderContainer>
  );
};
const styles = StyleSheet.create({
  demo: {
    flexDirection: "row",
  },
});

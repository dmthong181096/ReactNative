import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import { CanLuaScreen } from "./src/features/CanLua/Screen/CanLua.Screen";

const SafeAreaViewContainer = styled(SafeAreaView)`
    flex: 1;
    alignContent:flex-end;
    justifyContent: flex-end;
    margin:10px

`;

export default function App() {
  return (
    <SafeAreaViewContainer>
      <CanLuaScreen></CanLuaScreen>
    </SafeAreaViewContainer>
  );
}

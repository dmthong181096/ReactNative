// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.components";
StatusBar;
const isAndroid = function () {
  Platform.OS === "android";
};
export const RestaurantScreen = () => {
  const [searchData, setSearchData] = useState("");
  const onChangeText = (text) => setSearchData(text);
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
    >
      <View style={styles.header}>
        <Searchbar
          onChangeText={onChangeText}
          placeholder={"Search"}
        ></Searchbar>
      </View>
      <View style = {styles.body}>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantInfo></RestaurantInfo>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 0.05,
    // backgroundColor: "green",
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  body: {
    flex: 0.95,
    // backgroundColor: "red",
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20
  }
});

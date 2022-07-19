import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Some randoom street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <Card style={styles.card} elevation ={5}>
        <Card.Cover source={{ uri: photos[0] }} key={name} style={styles.cover}></Card.Cover>
        <Card.Title title={name}></Card.Title>
        {/* <Card.Actions> */}
          {/* <Button onPress={() => console.log("Press")}>OKe</Button> */}
        {/* </Card.Actions> */}
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  cover: {
    // padding: 10,
  }
});

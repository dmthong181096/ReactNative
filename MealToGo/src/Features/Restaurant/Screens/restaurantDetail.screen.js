import React from "react";
import { ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.components";

const Body = styled(View)`
  flex: 1;
  padding: ${theme.space[3]};
`;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurantInfo } = route.params;
  const [expandedBreak, setExpandedBreak] = React.useState(false);
  const [expandedHamburger, setExpandedHamburger] = React.useState(false);
  const [expandedDinner, setExpandedDinner] = React.useState(false);
  const [expandedDrinks, setExpandedDrinks] = React.useState(false);
  return (
    <>
      <Body>
        <RestaurantInfoCard restaurant={restaurantInfo}></RestaurantInfoCard>
        <ScrollView>
          <List.Accordion
            title="Break"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={expandedBreak}
            onPress={() => setExpandedBreak(!expandedBreak)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Hamburger"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={expandedHamburger}
            onPress={() => setExpandedHamburger(!expandedHamburger)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={expandedDinner}
            onPress={() => setExpandedDinner(!expandedDinner)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={expandedDrinks}
            onPress={() => setExpandedDrinks(!expandedDrinks)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </ScrollView>
      </Body>
    </>
  );
};

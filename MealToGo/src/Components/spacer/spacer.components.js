import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const TopSmall = styled(View)`
  margintop: 4px;
`;
const TopMedium = styled(View)`
  margintop: 8px;
`;
const TopLarge = styled(View)`
  margintop: 16px;
`;
const BottomSmall = styled(View)`
  marginbottom: 4px;
`;
const BottomMedium = styled(View)`
  marginbottom: 8px;
`;
const BottomLarge = styled(View)`
  marginbottom: 16px;
`;
const LeftSmall = styled(View)`
  marginleft: 4px;
`;
const LeftMedium = styled(View)`
  marginleft: 8px;
`;
const LeftLarge = styled.View`
margin-left: 100px;
`;
const RightSmall = styled(View)`
  marginright: 4px;
`;
const RightMedium = styled(View)`
  marginright: 8px;
`;
const RightLarge = styled(View)`
  marginright: 16px;
`;

export const Spacer = ({ varriant }) => {
  switch (varriant) {
    case "TopSmall":
      return <TopSmall />;
    case "TopMedium":
      return <TopMedium />;
    case "TopLarge":
      return <TopLarge />;
    case "BottomSmall":
      return <BottomSmall />;
    case "BottomMedium":
      return <BottomMedium />;
    case "BottomLarge":
      return <BottomLarge />;
    case "LeftSmall":
      return <LeftSmall />;
    case "LeftMedium":
      return <LeftMedium />;
    case "LeftLarge":
      return <LeftLarge />;
    case "RightSmall":
      return <RightSmall />;
    case "RightMedium":
      return <RightMedium />;
    case "RightLarge":
      return <RightLarge />;
    default:
		return;
      break;
  }
};

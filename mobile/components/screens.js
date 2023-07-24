import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
const size = 28;
color = "blue";
export const screens = [
  {
    name: "Home",
    icon: <MaterialCommunityIcons name={"home"} size={size} color={color} />,
  },
  {
    name: "Latest",
    icon: <MaterialIcons name="explore" size={size} color={color} />,
  },
  {
    name: "Shop",
    icon: <MaterialIcons name="shopping-bag" size={size} color={color} />,
  },
  {
    name: "Booking",
    icon: <MaterialCommunityIcons name={"home"} size={size} color={color} />,
  },
  {
    name: "Hotel",
    icon: <MaterialIcons name="hotel" size={size} color={color} />,
  },
  {
    name: "Orders",
    icon: (
      <MaterialCommunityIcons
        name="order-bool-descending-variant"
        size={size}
        color={color}
      />
    ),
  },
];

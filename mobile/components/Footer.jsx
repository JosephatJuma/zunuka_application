import React, { memo } from "react";
import { Center, Text, HStack, Pressable, Icon } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useNav from "../hooks/useNav";
//import { screens } from "./screens";
const Footer = ({ selected, scrollY }) => {
  const navigate = useNav();

  const screens = [
    {
      name: "Home",
      icon: <MaterialCommunityIcons name={"home"} />,
      active: 0,
    },
    {
      name: "Latest",
      icon: <MaterialIcons name="explore" />,
      active: 1,
    },
    {
      name: "Shop",
      icon: <MaterialIcons name="shopping-bag" />,
      active: 2,
    },
    {
      name: "Bookings",
      icon: <MaterialCommunityIcons name="briefcase-check" />,
      active: 3,
    },
    {
      name: "Hotel",
      icon: <MaterialIcons name="hotel" />,
      active: 4,
    },
    {
      name: "Orders",
      icon: <MaterialCommunityIcons name="order-bool-descending-variant" />,
      active: 5,
    },
  ];
  return (
    <HStack
      backgroundColor="#fff"
      alignItems="center"
      safeAreaBottom
      alignSelf="center"
      position="absolute"
      bottom={0}
      shadow={"9"}
      opacity={scrollY > 0 ? 0 : 1}
    >
      {screens.map((screen, index) => {
        return (
          <Pressable
            key={index}
            borderTopWidth={selected === screen.active ? 1 : 0}
            cursor="pointer"
            opacity={selected === screen.active ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => navigate.navigate(screen.name)}
          >
            <Center>
              <Icon mb="1" as={screen.icon} color="grey" size="md" />
              <Text color="grey" fontSize="13" fontWeight={"700"}>
                {screen.name}
              </Text>
            </Center>
          </Pressable>
        );
      })}
    </HStack>
  );
};

export default memo(Footer);

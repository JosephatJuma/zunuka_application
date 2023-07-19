import React, { memo } from "react";
import { Center, Text, HStack, Pressable, Icon } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useNav from "../hooks/useNav";
const Footer = ({ selected, scrollY }) => {
  const navigate = useNav();
  return (
    <HStack
      bg="#fff"
      alignItems="center"
      safeAreaBottom
      alignSelf="center"
      position="absolute"
      bottom={0}
      shadow={"9"}
      opacity={scrollY > 0 ? 0 : 1}
    >
      <Pressable
        cursor="pointer"
        opacity={selected === 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => navigate.navigate("Home")}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? "home" : "home-outline"}
              />
            }
            color="#FF5733"
            size="md"
          />
          <Text color="#FF5733" fontSize="15" fontWeight={"900"}>
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 1 ? 1 : 0.5}
        py="2"
        flex={1}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  selected === 1
                    ? "book-plus-multiple"
                    : "book-plus-multiple-outline"
                }
              />
            }
            color="#FF5733"
            size="md"
          />
          <Text color="#FF5733" fontSize="15" fontWeight={"900"}>
            Bookings
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 2 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => navigate.navigate("Cart")}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 2 ? "cart" : "cart-outline"}
              />
            }
            color="#FF5733"
            size="md"
          />
          <Text color="#FF5733" fontSize="15" fontWeight={"900"}>
            Cart
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={selected === 3 ? 1 : 0.5}
        py="2"
        flex={1}
      >
        <Center>
          <Icon
            mb="1"
            as={<MaterialIcons name={"category"} />}
            color="#FF5733"
            size="md"
          />
          <Text color="#FF5733" fontSize="15" fontWeight={"900"}>
            Orders
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
};

export default memo(Footer);

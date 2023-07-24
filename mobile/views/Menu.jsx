import { View, Text } from "react-native";
import React from "react";
import { Box, Icon, StatusBar, IconButton, Input, VStack } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import useNav from "../hooks/useNav";
const Menu = () => {
  const navigation = useNav();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box padding={4} mt={6} flex={1} style={{ backgroundColor: "orange" }}>
        <IconButton
          size={"sm"}
          rounded={"full"}
          zIndex={1}
          padding={4}
          bg={"#000000c0"}
          width={50}
          height={50}
          icon={
            <Icon
              size="lg"
              as={<AntDesign name="close" size={24} color="#fff" />}
              color="white"
            />
          }
          onPress={() => navigation.goBack()}
        />

        <Input
          mt={4}
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          backgroundColor={"white"}
        />
      </Box>
    </>
  );
};

export default Menu;

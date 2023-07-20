import React, { memo, useState } from "react";
import { Text, Avatar, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Header } from "@rneui/base";
import { Pressable } from "react-native";

import useNav from "../hooks/useNav";
function AppHeader({ scrollY }) {
  const navigation = useNav();

  return (
    <>
      <HStack
      //opacity={scrollY > 0 ? 0 : 1}
      //alignSelf="center"
      //position="absolute"
      //top={20}
      >
        <StatusBar bg="#3700B3" barStyle="dark-content" />

        <Header
          rightComponent={
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Avatar borderWidth={"2"} borderColor={"#fff"} shadow={"9"}>
                JJ
              </Avatar>
            </Pressable>
          }
          leftComponent={
            <Pressable
              _pressed={{ background: "#000" }}
              onPress={() => navigation.navigate("Search")}
            >
              <MaterialIcons name="search" size={34} color="grey" />
            </Pressable>
          }
          centerComponent={
            <>
              <MaterialIcons name="my-location" size={24} color="#FF5733" />
              <Text fw="bold" c="gray">
                Kampala, Uganada
              </Text>
            </>
          }
          backgroundColor="#fff"
        />
      </HStack>
    </>
  );
}
export default memo(AppHeader);

import React, { memo, useState } from "react";
import { Text, Avatar, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Header } from "@rneui/base";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useNav from "../hooks/useNav";
function AppHeader({ user, screen }) {
  const navigation = useNav();
  const linear = {
    colors: ["orange", "orange", "#ff5349"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  };
  const initials = user?.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <>
      <HStack
      //opacity={scrollY > 0 ? 0 : 1}
      //alignSelf="center"
      //position="absolute"
      //top={20}
      >
        <StatusBar barStyle="light-content" />

        <Header
          //ViewComponent={LinearGradient}
          style={{
            colors: ["orange", "orange", "#ff5349"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          rightComponent={
            <Pressable
              onPress={
                user !== null
                  ? () => navigation.navigate("Account")
                  : () => navigation.navigate("Login")
              }
            >
              <Avatar borderWidth={"2"} borderColor={"#fff"} shadow={"9"}>
                <MaterialIcons name="person" color="white" size={28} />
              </Avatar>
            </Pressable>
          }
          leftComponent={
            <Pressable
              _pressed={{ background: "#000" }}
              onPress={() => navigation.navigate("Menu")}
            >
              <MaterialIcons name="menu" size={34} color="white" />
            </Pressable>
          }
          centerComponent={
            <>
              <Text fw="900" color="#fff" fontSize={22}>
                {screen}
              </Text>
            </>
          }
          backgroundColor="#FFA500"
        />
      </HStack>
    </>
  );
}
export default memo(AppHeader);

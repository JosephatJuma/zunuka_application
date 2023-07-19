import React, { memo, useState } from "react";
import { Text, Avatar, HStack } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Header } from "@rneui/base";
import { Pressable } from "react-native";
import CustomActionsheet from "./CustomActionSheet";
import useNav from "../hooks/useNav";
function AppHeader({ scrollY }) {
  const navigation = useNav();
  const [isActionsheetVisible, setActionsheetVisible] = useState(false);

  const openActionsheet = () => {
    setActionsheetVisible(true);
  };
  return (
    <>
      <HStack
      //opacity={scrollY > 0 ? 0 : 1}
      //alignSelf="center"
      //position="absolute"
      //top={20}
      >
        <StatusBar bg="#3700B3" barStyle="dark-content" />
        <CustomActionsheet isOpen={true} />
        <Header
          rightComponent={
            <Pressable onPress={() => navigation.navigate("Account")}>
              <Avatar borderWidth={"2"} borderColor={"#fff"} shadow={"9"}>
                JJ
              </Avatar>
            </Pressable>
          }
          leftComponent={
            <Pressable
              onPress={openActionsheet}
              _pressed={{ background: "#000" }}
            >
              <MaterialCommunityIcons name="menu" size={30} color="black" />
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

import { FlashList } from "@shopify/flash-list";
import { Input, StatusBar, Icon, VStack } from "native-base";
import React, { useState, useRef } from "react";
import { Header } from "@rneui/base";
import BackButton from "../components/shared/BackButton2";
import Footer from "../components/Footer";
import { Ionicons } from "@expo/vector-icons";

import CartBody from "../components/cart/CartBody";
import AppHeader from "../components/AppHeader";
import useUser from "../hooks/useUser";
const Cart = () => {
  const [scrollY, setScrollY] = useState(0);
  const user = useUser();
  const prevScrollY = useRef(0);
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    if (currentScrollY > prevScrollY.current) setScrollY(1);
    else setScrollY(0);
    prevScrollY.current = currentScrollY;
  };

  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <AppHeader user={user} screen={"Shop"} />
      <VStack w="96%" alignSelf="center">
        <Input
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
        />
      </VStack>
      <CartBody onScroll={handleScroll} />
      <Footer selected={2} scrollY={scrollY} />
    </>
  );
};

export default Cart;

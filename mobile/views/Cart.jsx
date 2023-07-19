import { FlashList } from "@shopify/flash-list";
import { Input, StatusBar } from "native-base";
import React, { useState, useRef } from "react";
import { Header } from "@rneui/base";
import BackButton from "../components/shared/BackButton2";
import Footer from "../components/Footer";
import { AntDesign } from "@expo/vector-icons";

import CartBody from "../components/cart/CartBody";
const Cart = () => {
  const [scrollY, setScrollY] = useState(0);
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
      <Header leftComponent={<BackButton />} backgroundColor="#fff" />
      <Input
        leftElement={<AntDesign name="search1" size={26} />}
        m={2}
        shadow={"0"}
        backgroundColor={"#fff"}
      />
      <CartBody onScroll={handleScroll} />
      <Footer selected={2} scrollY={scrollY} />
    </>
  );
};

export default Cart;

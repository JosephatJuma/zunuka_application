import React, { memo, useState, useRef } from "react";
import AppHeader from "../components/AppHeader";
import { Text, Stack, Heading } from "native-base";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import CustomActionsheet from "../components/CustomActionSheet";
function Home() {
  const [scrollY, setScrollY] = useState(0);

  const prevScrollY = useRef(0);
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    if (currentScrollY > prevScrollY.current) setScrollY(1);
    else if (currentScrollY === prevScrollY.current) setScrollY(0);
    else setScrollY(0);
    prevScrollY.current = currentScrollY;
  };

  return (
    <>
      <AppHeader scrollY={scrollY} />

      <Stack
        p={3}
        //opacity={scrollY > 0 ? 0 : 1}
      >
        <Text>Hi Josephat,</Text>
        <Heading fontWeight={"900"}>Where would you want to go?</Heading>
      </Stack>
      <HomeMain onScroll={handleScroll} />

      <Footer selected={0} scrollY={scrollY} />
    </>
  );
}

export default memo(Home);

//npx expo install react-native-screens react-native-safe-area-context

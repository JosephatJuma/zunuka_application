import React, { memo, useState, useRef } from "react";
import { Text, Stack, Heading } from "native-base";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import { Animated } from "react-native"; // Import Animated from react-native
import AppHeader from "../components/AppHeader";
function Home() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)); // Use Animated.Value for scrollY

  const prevScrollY = useRef(0);
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    if (currentScrollY > prevScrollY.current) setScrollY(new Animated.Value(1));
    else if (currentScrollY === prevScrollY.current)
      setScrollY(new Animated.Value(0));
    else setScrollY(new Animated.Value(0));
    prevScrollY.current = currentScrollY;
  };

  // Define the opacity animation
  const footerOpacity = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <>
      {/* Use Animated.View for the header and set the style */}

      <AppHeader scrollY={scrollY} />

      <Stack p={3}>
        <Text>Hi Josephat,</Text>
        <Heading fontWeight={"900"}>Where would you want to go?</Heading>
      </Stack>
      <HomeMain onScroll={handleScroll} />
      {/* Use Animated.View for the footer and set the style */}
      <Animated.View style={{ opacity: footerOpacity }}>
        <Footer selected={0} scrollY={footerOpacity} />
      </Animated.View>
    </>
  );
}

export default memo(Home);

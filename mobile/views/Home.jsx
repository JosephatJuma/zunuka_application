import React, { memo, useState, useRef } from "react";
import { Text, Stack, Heading } from "native-base";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import { Animated } from "react-native"; // Import Animated from react-native
import AppHeader from "../components/AppHeader";
function Home() {
  const [scrollYX, setScrollYX] = useState(new Animated.Value(0)); // Use Animated.Value for scrollY
  const scrollY = useRef(new Animated.Value(0)).current;
  const prevScrollY = useRef(0);
  const handleScroll = (event) => {
    const currentScrollYX = event.nativeEvent.contentOffset.y;
    if (currentScrollYX > prevScrollY.current)
      setScrollYX(new Animated.Value(1));
    else if (currentScrollYX === prevScrollY.current)
      setScrollYX(new Animated.Value(0));
    else setScrollYX(new Animated.Value(0));
    prevScrollY.current = currentScrollYX;
  };
  // Define the opacity animation
  const footerOpacity = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: "extend",
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      // listener: (event) => {
      //   handleScroll(event);
      // },
    }
  );

  // Calculate the threshold where the top bar should start scrolling up
  const headerScrollThreshold = 400; // Change this value as needed

  return (
    <>
      {/* Use Animated.View for the header and set the style */}
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [0, headerScrollThreshold],
            outputRange: [200, 0],
            extrapolate: "clamp",
          }),
          // backgroundColor: "blue", // Change this to your desired top bar background color
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppHeader scrollY={scrollY} />

        <Stack>
          <Text>Hi Josephat,</Text>
          <Heading fontWeight={"900"}>Where would you want to go?</Heading>
        </Stack>
      </Animated.View>
      <HomeMain onScroll={onScroll} />
      {/* Use Animated.View for the footer and set the style */}
      <Animated.View style={{ opacity: footerOpacity }}>
        <Footer selected={0} scrollY={footerOpacity} />
      </Animated.View>
    </>
  );
}

export default memo(Home);

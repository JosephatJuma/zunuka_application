import React, { memo, useState, useRef } from "react";
import { Text, Stack, Heading } from "native-base";
import HomeMain from "../components/HomeMain";
import { Animated } from "react-native"; // Import Animated from react-native
import AppHeader from "../components/AppHeader";
import HomeSlide from "../components/HomeSlide";
import useUser from "../hooks/useUser";
function Home() {
  const user = useUser();
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
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "extend",
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Calculate the threshold where the top bar should start scrolling up
  const headerScrollThreshold = 600; // Change this value as needed

  return (
    <>
      <AppHeader user={user} screen={"Home"} />
      {/* Use Animated.View for the header and set the style */}
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [0, headerScrollThreshold],
            outputRange: [250, 0],
            extrapolate: "clamp",
          }),
          // backgroundColor: "blue", // Change this to your desired top bar background color
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Text>Hi {user !== null ? user?.name : "Guest"},</Text>
          <Heading fontWeight={"900"}>Where would you want to go?</Heading>
          <HomeSlide />
        </Stack>
      </Animated.View>
      <HomeMain onScroll={onScroll} />
    </>
  );
}

export default memo(Home);

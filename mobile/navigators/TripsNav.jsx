import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Animated } from "react-native";
import Trips from "../app/trips/Trips";
import Popular from "../app/trips/Popular";
import Header from "../app/home/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const TopTab = createMaterialTopTabNavigator();

const TripsNav = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Calculate the threshold where the top bar should start scrolling up
  const headerScrollThreshold = 10;
  const TripsScreen = () => {
    return <Trips />;
  };
  const PopularScreen = () => {
    return <Popular onScroll={onScroll} />;
  };
  return (
    <>
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [0, headerScrollThreshold],
            outputRange: [100, 35],
            extrapolate: "clamp",
          }),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
      </Animated.View>

      <TopTab.Navigator
        inactiveColor="gray"
        screenOptions={({ route }) => ({
          tabBarAndroidRipple: { borderless: true },
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "orange",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "All Trips") {
              iconName = focused ? "view-list" : "view-list";
            } else if (route.name === "Popular") {
              iconName = focused ? "flash" : "flash-outline";
            } else if (route.name === "Shows") {
              iconName = focused ? "music" : "music";
            } else if (route.name === "Games") {
              iconName = focused
                ? "gamepad-variant"
                : "gamepad-variant-outline";
            } else if (route.name === "Trips") {
              iconName = focused ? "widgets" : "widgets-outline";
            }
            return (
              <MaterialCommunityIcons name={iconName} size={25} color={color} />
            );
          },
          //tabBarActiveTintColor: theme === "dark" ? "white" : "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <TopTab.Screen name="All Trips" component={PopularScreen} />
        <TopTab.Screen name="Popular" component={PopularScreen} />
        <TopTab.Screen name="Games" component={PopularScreen} />
        <TopTab.Screen name="Shows" component={PopularScreen} />
      </TopTab.Navigator>
    </>
  );
};

export default TripsNav;

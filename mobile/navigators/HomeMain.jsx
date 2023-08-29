import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import Home from "../app/home/Home";
import Cart from "../views/Cart";
import Menu from "../views/Menu";
import Explore from "./Explore";
import AccountNav from "./AccountNav";
import TripsNav from "./TripsNav";
const Tab = createMaterialBottomTabNavigator();

const HomeMain = () => {
  const HomeScreen = () => {
    return <Home />;
  };

  const AccountScreen = () => {
    return <AccountNav />;
  };
  const ShopScreen = () => {
    return (
      <NativeBaseProvider>
        <Cart />
      </NativeBaseProvider>
    );
  };

  const TripsScreen = () => {
    return <TripsNav />;
  };
  const ExploreScreen = () => {
    return <Explore />;
  };
  const MenuScreen = () => {
    return (
      <NativeBaseProvider>
        <Menu />
      </NativeBaseProvider>
    );
  };
  return (
    <Tab.Navigator
      inactiveColor="gray"
      shifting={true}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarAndroidRipple: { borderless: true },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Account") {
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "shopping" : "shopping-outline";
          } else if (route.name === "Stay") {
            iconName = focused ? "bed" : "bed";
          } else if (route.name === "Trips") {
            iconName = focused ? "widgets" : "widgets";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          );
        },
        //tabBarActiveTintColor: theme === "dark" ? "white" : "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Shop" component={AccountScreen} />
      <Tab.Screen name="Stay" component={ExploreScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeMain;

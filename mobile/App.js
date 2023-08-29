import React from "react";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DrawerComponent from "./app/components/DrawerComponent";
import Home from "./app/home/Home";
import AccountNav from "./navigators/AccountNav";
import TripsNav from "./navigators/TripsNav";
import Explore from "./navigators/Explore";
import Shop1 from "./app/shop/Shop1";
import Details from "./app/user/Details";
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  const theme = useSelector((state) => state.theme.theme);

  const HomeScreen = () => {
    return <Home />;
  };

  const AccountScreen = () => {
    return <AccountNav />;
  };

  const TripsScreen = () => {
    return <TripsNav />;
  };
  const ExploreScreen = () => {
    return <Explore />;
  };
  const ShoppingScreen = () => {
    return <Shop1 />;
  };
  const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return <Details item={item} />;
  };
  const MainHome = () => {
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
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "account" : "account-outline";
            } else if (route.name === "Shop") {
              iconName = focused ? "shopping" : "shopping-outline";
            } else if (route.name === "Stay") {
              iconName = focused ? "bed" : "bed-outline";
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trips" component={TripsScreen} />
        <Tab.Screen name="Shop" component={ShoppingScreen} />
        <Tab.Screen name="Stay" component={ExploreScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        drawerContent={DrawerComponent}
        screenOptions={{
          headerShown: false,
          swipeEdgeWidth: 100,
          drawerType: "front",
          swipeMinDistance: 100,
          drawerStyle: { width: "83%" },
        }}
      >
        <Drawer.Screen name="Zunguka" component={MainHome} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

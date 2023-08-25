import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "./views/Home";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Account from "./views/Account";
import Details from "./views/Details";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Register from "./views/Register";
import Search from "./views/Search";
import Menu from "./views/Menu";

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  const HomeScreen = () => {
    return (
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    );
  };

  const AccountScreen = () => {
    return (
      <NativeBaseProvider>
        <Account />
      </NativeBaseProvider>
    );
  };
  const ShopScreen = () => {
    return (
      <NativeBaseProvider>
        <Cart />
      </NativeBaseProvider>
    );
  };
  const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return (
      <NativeBaseProvider>
        <Details item={item} />
      </NativeBaseProvider>
    );
  };

  const SearchScreen = () => {
    return (
      <NativeBaseProvider>
        <Search />
      </NativeBaseProvider>
    );
  };

  //Auth Screens
  const LoginScreen = () => {
    return (
      <NativeBaseProvider>
        <Login />
      </NativeBaseProvider>
    );
  };
  const MenuScreen = () => {
    return (
      <NativeBaseProvider>
        <Menu />
      </NativeBaseProvider>
    );
  };
  const RegisterScreen = () => {
    return (
      <NativeBaseProvider>
        <Register />
      </NativeBaseProvider>
    );
  };

  //const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: "horizontal",
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: "horizontal-inverted",
          }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator> */}
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
            } else if (route.name === "User") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "Post") {
              iconName = focused ? "addfile" : "addfile";
            }
            return <AntDesign name={iconName} size={25} color={color} />;
          },
          //tabBarActiveTintColor: theme === "dark" ? "white" : "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Post" component={SearchScreen} />
        <Tab.Screen name="User" component={AccountScreen} />
      </Tab.Navigator>

      <Stack.Screen
        name="Menu"
        component={RegisterScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </NavigationContainer>
  );
}

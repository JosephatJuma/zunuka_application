import React from "react";

import Home from "./views/Home";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import Account from "./views/Account";
import Details from "./views/Details";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Register from "./views/Register";
import Search from "./views/Search";

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
  const CartScreen = () => {
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
      <Stack.Navigator
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
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            gestureDirection: "vertical",
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
          name="Cart"
          component={CartScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

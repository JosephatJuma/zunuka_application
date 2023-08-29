import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Profile from "../app/user/Profile";
import Settings from "../app/user/Settings";
import Search from "../app/user/Search";
import Login from "../views/Login";
import Register from "../views/Register";

const AccountNav = () => {
  const ProfileScreen = () => {
    return <Profile />;
  };
  const SettingsScreen = () => {
    return <Settings />;
  };
  const SearchScreen = () => {
    return <Search />;
  };
  const LoginScreen = () => {
    return <Login />;
  };
  const RegisterScreen = () => {
    return <Register />;
  };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNav;

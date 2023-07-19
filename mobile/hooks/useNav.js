import React from "react";
import { useNavigation } from "@react-navigation/native";

function useNav() {
  const navigation = useNavigation();
  return navigation;
}

export default useNav;

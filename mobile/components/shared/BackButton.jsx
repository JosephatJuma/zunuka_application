import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";
import useNav from "../../hooks/useNav";
function BackButton() {
  const navigation = useNav();
  return (
    <IconButton
      variant="subtle"
      size="sm"
      rounded={"full"}
      position="absolute"
      top={10}
      left={2}
      zIndex={1}
      padding={3}
      bg={"#000000c0"}
      onPress={() => navigation.goBack()}
      
    >
      <MaterialIcons name="arrow-back" size={20} color={"white"} />
    </IconButton>
  );
}

export default BackButton;

import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";
import useNav from "../../hooks/useNav";
function BackButton() {
  const navigation = useNav();
  return (
    <IconButton
      variant="solid"
      icon={
        <Icon
          size="sm"
          as={<MaterialIcons name="arrow-back-ios" />}
          color="white"
        />
      }
      size={"sm"}
      rounded={"full"}
      position="absolute"
      top={10}
      left={2}
      zIndex={1}
      padding={4}
      bg={"#FF5733"}
      onPress={() => navigation.goBack()}
    />
  );
}

export default BackButton;

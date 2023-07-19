import { Icon, Text, Image, Button, StatusBar, IconButton } from "native-base";
import React, { memo } from "react";
import BackButton from "../components/shared/BackButton";
const Details = ({ item }) => {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <BackButton />
      <Image
        height={"60%"}
        width={"100%"}
        source={{
          uri: item.image,
        }}
        alt="Image"
        rounded={"8"}
      />

      <Text>{item.title}</Text>
      <Button bg={"#FF5733"} m={2}>
        Book now
      </Button>
    </>
  );
};

export default memo(Details);

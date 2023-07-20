import { Text, StatusBar } from "native-base";
import React, { memo } from "react";
import { Image, Button } from "@rneui/base";
import BackButton from "../components/shared/BackButton";
const Details = ({ item }) => {
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <BackButton />
      <Image
        style={{ width: "100%", height: 500 }}
        source={{
          uri: item.image,
        }}
      />

      <Text>{item.title}</Text>
      <Button
        title="Book now"
        buttonStyle={{ backgroundColor: "#FF5733", margin: 2 }}
      />
    </>
  );
};

export default memo(Details);

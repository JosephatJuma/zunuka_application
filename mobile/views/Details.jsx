import { Text, StatusBar, Box } from "native-base";
import React, { memo, useRef } from "react";
import { Image, Button, Rating } from "@rneui/base";
import BackButton from "../components/shared/BackButton";
import { ScrollView } from "react-native";

const Details = ({ item }) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <BackButton />

      <Image
        style={{ width: "100%", height: 500 }}
        source={{
          uri: item.image,
        }}
      />
      <Box m={2}>
        <Text>{item.title}</Text>
        <Rating
          type="heart"
          ratingCount={3}
          fractions={2}
          startingValue={1.57}
          imageSize={40}
          showRating
        />
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          fugit dicta. Nemo, nulla perspiciatis. Distinctio nulla illum quam.
          Unde porro necessitatibus minus expedita sint nisi quos excepturi.
          Dignissimos, ab porro.
        </Text>
        <Text>lorem</Text>
        <Button
          title="Book now"
          buttonStyle={{ backgroundColor: "#FF5733", margin: 2 }}
        />
      </Box>
    </ScrollView>
  );
};

export default memo(Details);

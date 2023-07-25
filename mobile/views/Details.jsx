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
          //uri: item.image,
          uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
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
        <Text>{item.description}</Text>
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

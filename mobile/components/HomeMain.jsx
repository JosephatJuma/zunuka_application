import React, { memo, useEffect } from "react";
import { Button, Pressable, Image } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { Heading, Text } from "native-base";
import { ScrollView, View } from "react-native";
import { Rating } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import useFetchTrips from "../hooks/useFetchTrips";
import { Card } from "react-native-paper";
function HomeMain({ onScroll, handleScroll }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        flex={1}
        width="99%"
        shadow="9"
        bg="#fff"
        rounded={"xl"}
        h={250}
        p={0.1}
        margin={1}
        onPress={() => {
          nav.navigate("Details", {
            itemId: 86,
            item: item,
            otherParam: "anything you want here",
          });
        }}
        _pressed={{ backgroundColor: "gray" }}
      >
        <Image
          height={"60%"}
          width={"100%"}
          rounded={"xl"}
          source={{
            //uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
            //uri: `https://zunguka.onrender.com/uploads/${item.image}`,
            uri: "https://zunguka.onrender.com/uploads/ldi%20christmas%20party-1@1x_1.jpg",
          }}
          alt=""
        />

        <View style={{ margin: 2, alignSelf: "center" }}>
          {/* <Rating
            showRating
            fractions="{1}"
            startingValue="{3.3}"
            imageSize={70}
          /> */}
          <Heading fontSize={15}>{item.title}</Heading>
          <Text>About the trip</Text>
          <Text>Price</Text>
        </View>
      </Pressable>
    );
  };

  const nav = useNavigation();
  const { fetchTrips, errMsg } = useFetchTrips();
  useEffect(() => {
    fetchTrips();
  }, [trips]);
  const trips = useSelector((state) => state.trips.trips);
  return (
    <ScrollView
      style={{ flex: 1, width: "100%", height: "100%" }}
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={{ backgroundColor: "white" }}
    >
      <FlashList
        scrollEnabled={true}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        data={trips}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={2}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={5}
        windowSize={5}
        removeClippedSubviews={true}
        estimatedItemSize={50}
      />
    </ScrollView>
  );
}
export default memo(HomeMain);

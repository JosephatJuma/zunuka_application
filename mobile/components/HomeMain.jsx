import React, { memo } from "react";
import { Button, Pressable, Image } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { Heading, Text } from "native-base";
import { ScrollView } from "react-native";
import data from "./shared/data";
import { useNavigation } from "@react-navigation/native";
function HomeMain({ onScroll, handleScroll }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        width="96%"
        rounded="10"
        shadow="2"
        m={1}
        bg="#fff"
        h={180}
        p={1}
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
          source={{
            uri: item.image,
          }}
          alt="Image"
          rounded={"8"}
        />

        <Heading m={2} fontSize={16}>
          {item.title}
        </Heading>
        <Text>About the trip</Text>
      </Pressable>
    );
  };
  const renderCat = ({ item }) => {
    return (
      <Button
        key={item}
        size={"md"}
        rounded="7"
        width={100}
        bg={"#FF5733"}
        shadow={"7"}
        m={2}
      >
        {item}
      </Button>
    );
  };
  const categories = ["Popular", "Beach", "Hotel", "Games", "Another"];
  const nav = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1 }}
      onScroll={onScroll}
      scrollEventThrottle={16}
      //contentContainerStyle={{ height: "100%" }}
    >
      <FlashList
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={10}
        data={categories}
        renderItem={renderCat}
        keyExtractor={(item) => item}
        contentContainerStyle={{ height: 100 }}
      />

      <FlashList
        scrollEnabled={true}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={5}
        windowSize={5}
        indicatorStyle={{ backgroundColor: "red" }}
        removeClippedSubviews={true}
        estimatedItemSize={50}
      />
    </ScrollView>
  );
}
export default memo(HomeMain);

import React, { memo } from "react";
import { Text, Button, Pressable, Image } from "native-base";
import { FlashList } from "@shopify/flash-list";

import data from "./shared/data";
import { useNavigation } from "@react-navigation/native";
function HomeMain({ onScroll }) {
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
        _pressed={{ background: "unset" }}
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

        <Text>{item.title}</Text>
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
    <>
      <FlashList
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={10}
        data={categories}
        renderItem={renderCat}
        keyExtractor={(item) => item}
        //contentContainerStyle={{ height: 100 }}
      />

      <FlashList
        scrollEnabled={true}
        onScroll={onScroll}
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
    </>
  );
}
export default memo(HomeMain);

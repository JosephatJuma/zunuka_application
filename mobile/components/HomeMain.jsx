import React, { memo } from "react";
import { Button, Pressable, Image } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { Heading, Text } from "native-base";
import { ScrollView, View } from "react-native";
import { Rating } from "@rneui/base";
import data from "./shared/data";
import { useNavigation } from "@react-navigation/native";
function HomeMain({ onScroll, handleScroll }) {
  const renderItem = ({ item }) => {
    return (
      <View style={{ width: "96%" }}>
        <Pressable
          flex={1}
          width="96%"
          shadow="9"
          m={1}
          bg="#fff"
          h={180}
          p={0.1}
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
            height={"100%"}
            width={"100%"}
            source={{
              uri: item.image,
            }}
            alt="Image"
          />
        </Pressable>
        <View style={{ margin: 2, alignSelf: "center" }}>
          <Rating
            showRating
            fractions="{1}"
            startingValue="{3.3}"
            imageSize={70}
          />
          <Heading>{item.title}</Heading>
          <Text>About the trip</Text>
        </View>
      </View>
    );
  };
  const renderCat = ({ item }) => {
    return (
      <Button
        key={item}
        size={"md"}
        rounded="full"
        width={100}
        bg={"#FFA500"}
        shadow={"7"}
        m={1}
      >
        {item}
      </Button>
    );
  };
  const categories = ["Popular", "Beach", "Hotel", "Games", "Another"];
  const nav = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1, width: "100%", height: "100%" }}
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
        //contentContainerStyle={{ height: 100 }}
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
        removeClippedSubviews={true}
        estimatedItemSize={50}
      />
    </ScrollView>
  );
}
export default memo(HomeMain);

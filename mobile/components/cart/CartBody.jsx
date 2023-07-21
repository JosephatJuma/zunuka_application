import React, { memo } from "react";
import { Flex, Card } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { Button, Text } from "@rneui/base";
import { Image, Pressable } from "react-native";
import useNav from "../../hooks/useNav";
import data from "../shared/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { List } from "react-native-paper";
function CartBody({ onScroll }) {
  const renderItem = ({ item }) => {
    return (
      <List.Section>
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="history" />}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: "40%", borderRadius: 10 }}
          />
          <Pressable
            onPress={() => {
              nav.navigate("Details", {
                itemId: 86,
                item: item,
                otherParam: "anything you want here",
              });
            }}
          >
            <MaterialCommunityIcons
              name="unfold-more-vertical"
              size={24}
              color="#FF5733"
            />
          </Pressable>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  };
  const nav = useNav();
  return (
    <FlashList
      scrollEnabled={true}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      onEndReachedThreshold={5}
      windowSize={5}
      indicatorStyle={{ backgroundColor: "red" }}
      removeClippedSubviews={true}
      estimatedItemSize={50}
    />
  );
}
export default memo(CartBody);

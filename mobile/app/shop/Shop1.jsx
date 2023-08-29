import { View, RefreshControl, Image } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import {
  Card,
  Text,
  Chip,
  Divider,
  IconButton,
  Menu,
  Button,
  List,
  Title,
} from "react-native-paper";
import data from "../components/data";
import Header from "../components/Header";
const Shop1 = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <Card
        style={{ borderRadius: 10, borderWidth: 0, margin: 5, width: "96%" }}
        accessible={true}
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <Card.Cover
          source={{ uri: item.image }}
          style={{ height: 200, borderRadius: 0 }}
        />

        <Card.Content>
          <Text variant="titleMedium">{item.title}</Text>
        </Card.Content>
        <Card.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text variant="bodyMedium">Posted On:</Text>
          <Chip icon="clock" style={{ borderRadius: 100 }}></Chip>
        </Card.Content>
        <Button
          icon={"cart"}
          mode="contained"
          style={{ width: "80%", alignSelf: "center" }}
          onPress={() => {}}
        >
          Add to cart
        </Button>
        <Divider style={{ marginTop: 2 }} />
      </Card>
    );
  };
  return (
    <>
      <Header title={"Shop"} />
      {/* <Title style={{ fontWeight: "bold", margin: 10 }}>Camping tools</Title> */}
      <FlashList
        refreshControl={
          <RefreshControl
            //onRefresh={onRefresh}
            size="default"
            title="Relaoding"
          />
        }
        //onScroll={onScroll}
        //horizontal={true}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        // onEndReachedThreshold={5}
        // windowSize={5}
        //removeClippedSubviews={true}
        estimatedItemSize={160}
      />
    </>
  );
};

export default Shop1;

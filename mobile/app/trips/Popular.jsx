import { View, RefreshControl, Image } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import {
  Card,
  Text,
  Chip,
  Divider,
  IconButton,
  Menu,
  Button,
  List,
} from "react-native-paper";
import { Actionsheet, NativeBaseProvider } from "native-base";
import data from "../components/data";

const Popular = ({ onScroll }) => {
  const [open, setOpen] = React.useState(false);
  const renderItem = ({ item }) => {
    return (
      <Card style={{ borderRadius: 0, borderWidth: 0 }} accessible={true}>
        <Card.Actions>
          <IconButton
            icon={"dots-vertical"}
            style={{ borderWidth: 0 }}
            onPress={() => setOpen(true)}
          />
        </Card.Actions>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: 300, borderRadius: 0 }}
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
        <Button mode="contained" style={{ margin: 10 }}>
          Book
        </Button>
        <Divider style={{ marginTop: 2 }} />
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <NativeBaseProvider>
        <FlashList
          refreshControl={
            <RefreshControl
              //onRefresh={onRefresh}
              size="default"
              title="Relaoding"
            />
          }
          onScroll={onScroll}
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          initialNumToRender={10}
          maxToRenderPerBatch={20}
          // onEndReachedThreshold={5}
          // windowSize={5}
          //removeClippedSubviews={true}
          estimatedItemSize={160}
        />
        <Actionsheet isOpen={open} onClose={() => setOpen(false)}>
          <Actionsheet.Content style={{ height: 300 }}>
            <Text>Hello</Text>
          </Actionsheet.Content>
        </Actionsheet>
      </NativeBaseProvider>
    </View>
  );
};

export default Popular;

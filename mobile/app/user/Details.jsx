import { View, ScrollView, Image } from "react-native";
import { Text, Button, IconButton } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Details = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image
        style={{ width: "100%", height: 500 }}
        source={{
          //uri: item.image,
          uri: item.image,
        }}
      />

      <Text>{item.title}</Text>

      <Text>{item.description}</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur
        iure repellendus earum ad cumque, non deserunt tempore excepturi, a
        officia in quas aperiam assumenda asperiores est quod? Aut, aliquid.
      </Text>
      <Button
        icon={"cart"}
        mode="contained"
        style={{ margin: 5 }}
        onPress={() => {}}
      >
        Add to Cart
      </Button>
      <IconButton
        icon={"close"}
        style={{ position: "absolute", left: 0, top: 40 }}
        onPress={() => navigation.goBack()}
        size={30}
        iconColor="white"
      />
    </ScrollView>
  );
};

export default Details;

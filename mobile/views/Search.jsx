import {
  VStack,
  Heading,
  Input,
  Text,
  Box,
  StatusBar,
  Pressable,
} from "native-base";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { List } from "react-native-paper";
import useNav from "../hooks/useNav";
const Search = () => {
  const navigation = useNav();
  const recentSearch = [
    { id: 1, name: "Name" },
    { id: 2, name: "Name" },
    { id: 3, name: "Name" },
  ];
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const renderSearchHistory = ({ history }) => {
    return (
      <List.Section>
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="history" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  };
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="dark-content" />
      <Box mt={10} m={2}>
        <VStack w="100%" space={5} alignSelf="center">
          <Heading fontSize="lg">Search</Heading>
          <Input
            backgroundColor={"white"}
            shadow={"3"}
            autoFocus={true}
            placeholder="Search Events & Places"
            width="100%"
            borderRadius="4"
            py="3"
            px="1"
            InputLeftElement={
              <Pressable
                m="2"
                ml="3"
                size="6"
                onPress={() => navigation.goBack()}
              >
                <MaterialIcons name="arrow-back" size={25} color="gray" />
              </Pressable>
            }
            InputRightElement={
              <Pressable m="2" mr="3" size="6">
                <MaterialIcons name="search" color="gray" size={25} />
              </Pressable>
            }
          />
        </VStack>
      </Box>
      <FlashList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={recentSearch}
        renderItem={renderSearchHistory}
        keyExtractor={(history) => history.id.toString()}
        numColumns={1}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={5}
        windowSize={5}
        indicatorStyle={{ backgroundColor: "red" }}
        removeClippedSubviews={true}
        estimatedItemSize={10}
      />
    </>
  );
};

export default Search;

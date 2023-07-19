import { Card, StatusBar, Text, Avatar, IconButton } from "native-base";
import React from "react";
import { Drawer } from "react-native-paper";
import { Header } from "@rneui/base";
import BackButton2 from "../components/shared/BackButton2";
const Account = () => {
  const [active, setActive] = React.useState("");
  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Header backgroundColor="#fff" leftComponent={<BackButton2 />} />
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
    </>
  );
};

export default Account;

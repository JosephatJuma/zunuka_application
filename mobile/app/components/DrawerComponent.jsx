import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Divider, Avatar, IconButton, Title } from "react-native-paper";
import { Text, Card, Drawer } from "react-native-paper";
const DrawerComponent = () => {
  const [active, setActive] = React.useState("Home");
  const screens = [
    { name: "Home", icon: "home", title: "Home" },
    { name: "Search", icon: "magnify", title: "Search" },
    { name: "Settings", icon: "cog", title: "Settings" },
    { name: "Bookings", icon: "briefcase-check", title: "Bookings" },
    { name: "Orders", icon: "view-list", title: "Orders" },
  ];
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };
  // const handleToggleTheme = () => {
  //   theme === "light" ? toggleTheme("dark") : toggleTheme("light");
  // };
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 100,
      }}
      contentContainerStyle={{
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <Card.Content style={{ alignContent: "center", alignItems: "center" }}>
        <Avatar.Image
          size={100}
          source={{
            uri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
          }}
          style={{ alignSelf: "center" }}
        />
        <Title style={{ fontWeight: "bold", margin: 5 }}>Zunguka</Title>
      </Card.Content>
      <Divider />
      <Card.Content style={{ width: "100%" }}>
        {screens.map((screen, index) => {
          return (
            <Drawer.Item
              key={index}
              label={
                <Title style={{ fontWeight: "bold" }}>{screen.title}</Title>
              }
              active={active === screen.name}
              onPress={() => handleNavigation(screen.name)}
              icon={screen.icon}
              style={{ padding: 10, width: "100%", margin: 10 }}
            />
          );
        })}
      </Card.Content>
      <Divider />
      <IconButton
        icon="theme-light-dark"
        size={40}
        // onPress={handleToggleTheme}
        style={{ margin: 16, right: 0, bottom: 0 }}
      />
      <Card.Content>
        <Text>V 1.0.0</Text>
      </Card.Content>
    </ScrollView>
  );
};

export default DrawerComponent;

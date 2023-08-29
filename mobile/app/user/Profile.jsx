import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { List, Surface, Divider, Avatar } from "react-native-paper";

const Profile = () => {
  const navigation = useNavigation();
  const options = [
    { id: 1, name: "Settings", icon: "cog" },
    { id: 2, name: "Login", icon: "login" },
    { id: 3, name: "Logout", icon: "location-exit" },
    { id: 4, name: "Edit profile", icon: "account" },
    { id: 5, name: "Reviews", icon: "star" },
    { id: 6, name: "Notifications", icon: "bell-badge-outline" },
    { id: 7, name: "History", icon: "history" },
    { id: 8, name: "My Bookings", icon: "briefcase-check" },
  ];
  return (
    <ScrollView>
      <Header title={"Account"} />
      <Avatar.Image
        size={100}
        source={{
          uri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
        }}
        style={{ alignSelf: "center" }}
      />
      <View
        style={{ width: "100%", alignContent: "center", alignItems: "center" }}
      >
        <Surface
          style={{
            width: "100%",
            margin: "auto",
            alignSelf: "center",
          }}
        >
          {/* <List.Subheader>Some title</List.Subheader> */}
          {options.map((option) => {
            return (
              <React.Fragment key={option.id}>
                <List.Item
                  title={option.name}
                  left={() => <List.Icon icon={option.icon} />}
                  right={() => <List.Icon icon="chevron-right" size={24} />}
                  onPress={() => navigation.navigate(option.name)}
                  style={{ alignSelf: "center", padding: 10 }}
                />
                <Divider />
              </React.Fragment>
            );
          })}
        </Surface>
      </View>
    </ScrollView>
  );
};

export default Profile;

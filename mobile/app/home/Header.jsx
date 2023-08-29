import { Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const Header = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <Appbar.Header
      style={{
        width: "100%",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="Zunguka" titleStyle={{ fontWeight: "bold" }} />
      <Appbar.Action
        icon="magnify"
        onPress={() => navigation.navigate("Search")}
      />
      {/* <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}
      <Appbar.Action icon="cart-outline" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Header;

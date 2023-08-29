import { Appbar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const Header = ({ title }) => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <Appbar.Header
      style={{
        width: "100%",
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} titleStyle={{ fontWeight: "bold" }} />
      <Appbar.Action
        icon="magnify"
        onPress={() => navigation.navigate("Search")}
      />
      <Appbar.Action icon="cart-outline" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Header;

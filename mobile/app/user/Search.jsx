import { Appbar, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Search = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{ padding: 10 }}>
      <Searchbar
        mode="bar"
        icon={"arrow-left"}
        onIconPress={() => navigation.goBack()}
        autoFocus={true}
        placeholder="Search for locations"
      />
    </Appbar.Header>
  );
};

export default Search;

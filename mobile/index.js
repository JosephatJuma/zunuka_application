import "react-native-gesture-handler";
import store from "./state/store";
import { Provider } from "react-redux";
import App from "./App";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
import {
  MD2LightTheme,
  MD3LightTheme,
  DefaultTheme,
  MD2DarkTheme,
  MD3DarkTheme,
} from "react-native-paper";
import { useSelector } from "react-redux";
const Main = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <PaperProvider theme={theme === "dark" ? MD3DarkTheme : DefaultTheme}>
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={theme === "dark" ? "black" : "white"}
      />
      <App />
    </PaperProvider>
  );
};
const Application = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Application);
//AppRegistry.registerComponent("main", () => Application);

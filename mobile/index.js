import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import store from "./state/store";
import { Provider } from "react-redux";
import App from "./App";

const Application = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Application);

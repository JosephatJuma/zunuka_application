import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import tripsSlice from "./trips/tripsSlice";
import themeSlice from "./auth/themeSlice";
const store = configureStore({
  reducer: {
    login: loginSlice,
    trips: tripsSlice,
    theme: themeSlice,
    // registerForm: registerFormreducer;
  },
});

export default store;

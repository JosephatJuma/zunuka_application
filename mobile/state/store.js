import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import tripsSlice from "./trips/tripsSlice";
const store = configureStore({
  reducer: {
    login: loginSlice,
    trips: tripsSlice,
    // registerForm: registerFormreducer;
  },
});

export default store;

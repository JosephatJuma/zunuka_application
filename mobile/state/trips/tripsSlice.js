import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    fetch: (state, action) => {
      state.trips = action.payload;
    },
  },
});

export const { fetch } = tripsSlice.actions;
export default tripsSlice.reducer;

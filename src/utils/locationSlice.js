import { createSlice } from "@reduxjs/toolkit";
const locationSlice = createSlice({
  name: "location",
  initialState: {
    latitude: 13.026716,
    longitude: 77.630463,
  },
  reducers: {
    setUserLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});
export const { setUserLocation } = locationSlice.actions;
export default locationSlice.reducer;

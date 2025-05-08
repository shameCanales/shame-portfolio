import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { navMobileisOpen: false },
  reducers: {
    openNavMobile(state) {
      state.navMobileisOpen = true;
    },
    closeNavMobile(state) {
      state.navMobileisOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    navMobileisOpen: false,
    viewCertificateIsOpen: false,
    certificateImage: null,
  },
  reducers: {
    openNavMobile(state) {
      state.navMobileisOpen = true;
    },

    closeNavMobile(state) {
      state.navMobileisOpen = false;
    },

    viewCertificate(state, action) {
      state.certificateImage = action.payload.certSrc;
      state.viewCertificateIsOpen = true;
      console.log(state.certificateImage);
    },

    closeCertificate(state) {
      state.viewCertificateIsOpen = false;
      state.certificateImage = null;
      console.log(state.certificateImage);
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

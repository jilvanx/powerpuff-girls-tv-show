import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "show",
  initialState: {},
  reducers: {
    setShow(state, { payload }) {
      return { ...state, show: payload };
    },
  },
});

export const { setShow } = slice.actions;

export const selectShow = (state) => state.show;

export default slice.reducer;

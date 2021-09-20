import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "episodie",
  initialState: {
    episodieList: [],
    episodie: {},
  },
  reducers: {
    setEpisodieList(state, { payload }) {
      return { ...state, episodieList: payload };
    },
    setEpisodie(state, { payload }) {
      return { ...state, episodie: payload };
    },
  },
});

export const { setEpisodieList, setEpisodie } = slice.actions;

export const selectEpisodieList = (state) => state.episodie.episodieList;
export const selectEpisodie = (state) => state.episodie.episodie;

export default slice.reducer;

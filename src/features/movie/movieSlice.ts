import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

export interface movieState {
  data: movie[];
  status: "idle" | "loading" | "failed";
}

const initialState: movieState = {
  data: [],
  status: "idle",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    action: (state, action) => {},
    manageReaction: (state, action) => {},
  },

  extraReducers: (builder) => {},
});

export const { action } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movie;

export default movieSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { movies$ } from "../../data/movies";

export type movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  like: number;
  dislike: number;
  url: string;
};

export interface movieState {
  data: movie[];
  status: "idle" | "loading" | "failed";
}

const initialState: movieState = {
  data: [],
  status: "idle",
};

export const getMovies = createAsyncThunk("movie/getMovies", async () => {
  try {
    const response = await movies$;
    const movies = response.map((movie: movie) =>
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" +
          movie.title,
        { mode: "cors" }
      )
    );
    const urls = await Promise.all(movies).then((results) =>
      Promise.all(results.map((result) => result.json()))
    );

    return response.map((res: movie, index: number) => ({
      ...res,
      url: "http://image.tmdb.org/t/p/w500/" + urls[index].results[0].poster_path,
    }));
  } catch (err) {
    return Promise.reject(err);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    deleteMovie: (state, action) => {
      state.data = state.data.filter((movie) => movie.id !== action.payload);
    },
    manageReaction: (state, action) => {
      state.data = state.data.map((movie) =>
        movie.id === action.payload.id
          ? action.payload.reaction === "like"
            ? { ...movie, like: movie.like === 0 ? 1 : 0, dislike: 0 }
            : { ...movie, like: 0, dislike: movie.dislike === 0 ? 1 : 0 }
          : movie
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload.map((movie: movie) => ({ ...movie, like: 0, dislike: 0 }));
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { deleteMovie, manageReaction } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movie;

export default movieSlice.reducer;

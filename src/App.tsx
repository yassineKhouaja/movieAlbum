import { Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import MovieCard from "./components/MovieCard";
import MovieFilter from "./components/MovieFilter";
import SelectByPage from "./components/SelectByPage";
import { getMovies, movie, selectMovie } from "./features/movie/movieSlice";

function App() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [cardByPage, setCardByPage] = useState(4);
  const [filterCategory, setfilterCategory] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const { data: movieData } = useAppSelector(selectMovie);
  const movies = movieData.filter((movie: movie) =>
    filterCategory.length === 0 ? true : filterCategory.includes(movie.category)
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCardByPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const handleSelectChip = (values: string[]) => {
    setfilterCategory(values);
    setPage(1);
  };
  const moviesPages = movies.slice((page - 1) * cardByPage, page * cardByPage);

  return (
    <div className="main_container">
      <img
        src="https://cdn.dribbble.com/users/5279042/screenshots/15267327/media/0c5da002a24861b5be18a64bd97b01f3.jpg"
        alt="movie album"
        className="hero"
      />
      <div className="multiselect">
        <MovieFilter
          options={[...new Set(movieData.map((movie) => movie.category))]}
          handleChange={handleSelectChip}
        />
      </div>
      <Grid container spacing={2} justifyContent="center">
        {moviesPages.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(movies.length / cardByPage)}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            page={page}
          />
        </Stack>
        <SelectByPage handleChange={handleSelectChange} value={cardByPage} />
      </div>
    </div>
  );
}

export default App;

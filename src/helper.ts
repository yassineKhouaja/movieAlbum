import { movie } from "./features/movie/movieSlice";

export const getImageUrl = (url: string | undefined) =>
  url !== undefined && url.includes("http")
    ? url
    : "https://www.freeiconspng.com/uploads/no-image-icon-15.png";

export const jaugeValue = (movie: movie) =>
  Math.floor(
    ((movie.likes + movie.like) * 100) / (movie.likes + movie.like + movie.dislikes + movie.dislike)
  );

export const convert = (val: number) => {
  var s = ["", "k", "m", "b", "t"];

  var sNum = Math.floor(("" + val).length / 3);

  var sVal = parseFloat((sNum !== 0 ? val / Math.pow(1000, sNum) : val).toPrecision(2));

  const final = sVal % 1 !== 0 ? sVal.toFixed(1) : sVal;

  return final + s[sNum];
};

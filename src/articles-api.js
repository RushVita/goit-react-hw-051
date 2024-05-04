import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGVkMGFkYjlkMjYzNzhmNTJjZGIzYTBiYTUxMzZjMiIsInN1YiI6IjY0ZjRkMTc0ZjI5ZDY2MDEwMDA4OWI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YqpC9iMCT5Xq1r2H0C24zz4jsE5Fl2A5kJgTpfxnVQ",
  },
};

export const fetchTrendingmovies = async () => {
  const response = await axios.get("", options);

  return response.data;
};

export const fetchById = async () => {
  const response = await axios.get(``, options);

  return response.data;
  
};

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGVkMGFkYjlkMjYzNzhmNTJjZGIzYTBiYTUxMzZjMiIsInN1YiI6IjY0ZjRkMTc0ZjI5ZDY2MDEwMDA4OWI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YqpC9iMCT5Xq1r2H0C24zz4jsE5Fl2A5kJgTpfxnVQ",
  },
};

export const fetchTrendingmovies = async () => {
  const response = await axios.get("trending/movie/day", options);

  return response.data;
};

export const fetchByIdDetails = async (id) => {
  const response = await axios.get(`movie/${id}`, options);

  return response.data;
};
export const fetchByIdCredits = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, options);

  return response.data;
};
export const fetchByIdReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, options);

  return response.data;
};
export const fetchSearch = async (searchQuery) => {
  const response = await axios.get("search/movie?", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGVkMGFkYjlkMjYzNzhmNTJjZGIzYTBiYTUxMzZjMiIsInN1YiI6IjY0ZjRkMTc0ZjI5ZDY2MDEwMDA4OWI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._YqpC9iMCT5Xq1r2H0C24zz4jsE5Fl2A5kJgTpfxnVQ",
    },
    params: {
      query: searchQuery,
      page: 1,
    },
  });

  return response.data;
};

import axios from 'axios';

const API_KEY = '5b00cd10e05c354cfbdbc23aa24fc7b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const searchTrendMovie = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchQueryMovie = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data;
};

export const searchMovieId = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const searchMovieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const searchMovieRewiews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

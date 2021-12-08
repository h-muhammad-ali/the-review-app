import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_SELECTED_MOVIE,
} from "./moviesTypes";

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (users) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: users,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const setSelectedMovie = (id) => ({
  type: SET_SELECTED_MOVIE,
  payload: id,
});

export const fetchMovies = () => (dispatch) => {
  dispatch(fetchMoviesRequest());
  const movies = require("../../data/movies-data.json");
  console.log(movies);
  dispatch(fetchMoviesSuccess(movies));
  // axios
  //   .get("../../data/movies-data.json")
  //   .then((response) => {
  //     const movies = response?.data ?? [];
  //     dispatch(fetchMoviesSuccess(movies));
  //   })
  //   .catch((error) => {
  //     dispatch(fetchMoviesFailure(error?.message));
  //   });
};

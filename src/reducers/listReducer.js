import initialState from "./initialState.js";
import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js";

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      console.log("add");
      return Object.assign({}, state, {
        movies: state.movies.map((movie, movieId, listKey) => {
          if (movie.id === movieId && !movie.listKeys.includes(listKey)) {
            let newMovieEntry = movie;
            movie.listKeys = movie.listKeys.concat(listKey);
            return newMovieEntry;
          } else {
            return movie;
          }
        })
      })
    case DELETE_MOVIE:
      console.log("delete");
      return Object.assign({}, state, {
        movies: state.movies.map((movie, movieId, listKey) => {
          if (movie.id === movieId && movie.listKeys.includes(listKey)) {
            let newMovieEntry = movie;
            movie.listKeys = movie.listKeys.filter(key => key !== listKey);
            return newMovieEntry;
          } else {
            return movie;
          }
        })
      })
  default:
    return state
  }
}

export default listReducer;
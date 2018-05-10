import initialState from "./initialState.js";
import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js";

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:

      // FIND MOVIE IN LIST OF USER MOVIES
      var flag = false;
      state.movies.forEach ( (movie) => {
        if (movie.id === action.movieId) {
          flag = true;
        }
      })

      // UPDATE MOVIE LIST KEYS IF FOUND
      if ( flag === true ) {
        return Object.assign( {}, state, {
          movies: state.movies.map( (movie) => {
            if ( movie.id === action.movieId && !movie.listKeys.includes(action.listKey) ) {
              let newMovieEntry = movie;
              newMovieEntry.listKeys = movie.listKeys.concat( action.listKey );
              return newMovieEntry;
            } else {
              return movie;
            }
          })
        })

      // ADD MOVIE AND LIST KEYS IF NOT FOUND
      } else {
        return Object.assign( {}, state, {
          movies: state.movies.concat(
            { id: action.movieId, listKeys: [action.listKey]}
          )
        })
      }


    case DELETE_MOVIE:

      // FIND MOVIE IN LIST OF USER MOVIES
      var flag = false;
      state.movies.forEach ( (movie) => {
        if (movie.id === action.movieId) {
          flag = true;
        }
      })

      // UPDATE MOVIE LIST KEYS IF FOUND
      if ( flag === true ) {
        return Object.assign( {}, state, {
          movies: state.movies.map( (movie) => {
            if ( movie.id === action.movieId && movie.listKeys.includes(action.listKey) ) {
              let newMovieEntry = movie;
              newMovieEntry.listKeys = movie.listKeys.filter( key => key !== action.listKey );
              return newMovieEntry;
            } else {
              return movie;
            }
          })
        })

      // ADD MOVIE AND LIST KEYS IF NOT FOUND
      }

      // return Object.assign({}, state, {
      //   movies: state.movies.map((movie, movieId, listKey) => {
      //     if (movie.id === movieId && movie.listKeys.includes(listKey)) {
      //       let newMovieEntry = movie;
      //       movie.listKeys = movie.listKeys.filter(key => key !== listKey);
      //       return newMovieEntry;
      //     } else {
      //       return movie;
      //     }
      //   })
      // })

  default:
    return state
  }
}

export default listReducer;
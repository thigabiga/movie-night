import initialState from "./initialState.js";
import {ADD_MOVIE, DELETE_MOVIE, LOAD_MOVIES, TOGGLE_SEEN, TOGGLE_DELETE} from "../actions/actions.js";

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

      console.log("delete");
      // FIND MOVIE IN LIST OF USER MOVIES
      var flagA = false;
      state.movies.forEach ( (movie) => {
        if (movie.id === action.movieId) {
          flagA = true;
        }
      })

      // UPDATE MOVIE LIST KEYS IF FOUND
      if ( flagA === true ) {
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
      } else {
        break;
      }


    case LOAD_MOVIES:
      return Object.assign( {}, state, {
        display: state.movies.filter( (movie) => movie.listKeys.includes(action.listKey) ),
        displayListKey: action.listKey
      })


    case TOGGLE_SEEN:
      if (!action.seen) {
        return Object.assign( {}, state, {
          movies: state.movies.map( (movie) => {
            if ( movie.id === action.movieId ) {
              let newMovieEntry = movie;
              newMovieEntry.listKeys = movie.listKeys.concat(0);
              return newMovieEntry;
            } else {
              return movie;
            }
          })
        })
      } else {
          return Object.assign( {}, state, {
            movies: state.movies.map( (movie) => {
              if ( movie.id === action.movieId ) {
                let newMovieEntry = movie;
                newMovieEntry.listKeys = movie.listKeys.filter( key => key !== 0 );
                return newMovieEntry;
              } else {
                return movie;
              }
            })
          })
        }

      case TOGGLE_DELETE:
        console.log("toggle delete");
        return Object.assign( {}, state, {
          movies: state.movies.map( (movie) => {
            if ( movie.id === action.movieId ) {
              let newMovieEntry = movie;
              newMovieEntry.listKeys = movie.listKeys.filter(key => key !== action.listKey );
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
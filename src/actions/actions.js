// export const FETCH_STUFF = 'FETCH_STUFF';
// export const RECEIVE_STUFF = 'RECEIVE_STUFF';
// export const TOGGLE_SEEN = 'TOGGLE_SEEN';
// export const LOAD_MOVIE = 'LOAD_MOVIE';

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function addMovieToList(movieId, listKey) {
    return {
      type: ADD_MOVIE,
      movieId: movieId,
      listKey: listKey
    };
  }
  
  export function deleteMovieFromList(movieId, listKey) {
    return {
      type: DELETE_MOVIE,
      movieId: movieId,
      listKey: listKey
    };
  }
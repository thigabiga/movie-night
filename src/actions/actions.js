// export const FETCH_STUFF = 'FETCH_STUFF';
// export const RECEIVE_STUFF = 'RECEIVE_STUFF';

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const LOAD_MOVIES = 'LOAD_MOVIES';

export function addMovieToList(movieId, listKey) {
  return {
    type: ADD_MOVIE,
    movieId: movieId,
    listKey: listKey
  }
}
  
export function deleteMovieFromList(movieId, listKey) {
  return {
    type: DELETE_MOVIE,
    movieId: movieId,
    listKey: listKey
  };
}

export function loadMoviesFromList(listKey) {
  return {
    type: LOAD_MOVIES,
    listKey: listKey
  }
}
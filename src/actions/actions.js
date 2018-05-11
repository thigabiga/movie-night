// export const FETCH_STUFF = 'FETCH_STUFF';
// export const RECEIVE_STUFF = 'RECEIVE_STUFF';

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const TOGGLE_SEEN = 'TOGGLE_SEEN';
export const TOGGLE_DELETE = 'TOGGLE_DELETE';

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

export function toggleSeenMovie(seen, movieId) {
  return {
    type: TOGGLE_SEEN,
    seen: seen,
    movieId: movieId
  }
}

export function toggleDeleteMovie(listKey, movieId) {
  return {
    type: TOGGLE_DELETE,
    listKey: listKey,
    movieId: movieId
  }
}
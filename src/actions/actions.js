// export const FETCH_STUFF = 'FETCH_STUFF';
// export const RECEIVE_STUFF = 'RECEIVE_STUFF';
export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
// export const TOGGLE_SEEN = 'TOGGLE_SEEN';
// export const LOAD_MOVIE = 'LOAD_MOVIE';

export function addMovieToList(item) {
    return {
      type: ADD_MOVIE,
      item: item
    };
  }
  
  export function deleteMovieFromList(item) {
    return {
      type: DELETE_MOVIE,
      item: item
    };
  }
  
//   export function toggleSeenMovie = (item) => {
//     return {
//       type: TOGGLE_SEEN,
//       movie: item
//     };
//   }
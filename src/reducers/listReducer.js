import initialState from "./initialState.js";
import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js";


// import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js"

// const initialState = {
//   firstName: "Erin",
//   lastName: "Thigpen",
//   movies: [
//     { id: "12cfb892-aac0-4c5b-94af-521852e46d6a", listKeys: [0, 2]},
//     { id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49", listKeys: [1]}
//     ],
//   lists: [
//       {key: 0, label: "watched", required: true},
//       {key: 1, label: "favorites", required: false},
//       {key: 2, label: "to-watch", required: false}
//   ],
//   display: []
// }

// export default initialState;

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
        // lists: state.lists.map((list, movieId, listKey) => {
        //   if (list.key === listKey && !list.movieIds.includes(movieId)) {
        //     let newList = list;
        //     newList.movieIds = list.movieIds.concat(movieId);
        //     return newList;
        //   } else {
        //     return list;
        //   }
        // })
      })
    case DELETE_MOVIE:
      console.log("delete");
      return Object.assign({}, state, {
        movies: state.movies.map((movie, movieId, listKey) => {
          if (movie.id === movieId && movie.listKeys.includes(listKey)) {
            let newMovieEntry = movie;
            movie.listKeys = movie.listKeys.filter(key => key != listKey);
            return newMovieEntry;
          } else {
            return movie;
          }
        })
        // lists: state.lists.map((list, movieId, listKey) => {
        //   if (list.key === listKey && list.movieIds.includes(movieId)) {
        //     let newList = list;
        //     newList.movieIds = list.movieIds.filter(id => id !== movieId);
        //     return newList;
        //   } else {
        //     return list;
        //   }
        // })
      })

  default:
    return state
  }
}

export default listReducer;
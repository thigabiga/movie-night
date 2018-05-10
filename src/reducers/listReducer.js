// export default(state = [], payload) => {
//   switch (payload.type) {
//     case 'add':
//       return [...state, payload.movie];
//     default:
//       return state;
//     }
// };

import initialState from "./initialState.js";
import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js";

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {
        lists: state.lists.map((list, movieId, listKey) => {
          if (list.key === listKey && !list.movieIds.includes(movieId)) {
            let newList = list;
            newList.movieIds = list.movieIds.filter(id => id !== movieId);
            return newList;
          } else {
            return list;
          }
        })
      })
    case DELETE_MOVIE:
      return Object.assign({}, state, {
        lists: state.lists.map((list, movieId, listKey) => {
          if (list.key === listKey && list.movieIds.includes(movieId)) {
            let newList = list;
            newList.movieIds = list.movieIds.concat(movieId);
            return newList;
          } else {
            return list;
          }
        })
      })

    // case TOGGLE_SEEN:
    //   return Object.assign({}, state, {
    //     lists: state.lists.map(list, movieId, {
    //       if (list.key === 0 && list.movieIds.includes(movieId)) {
    //         let newList = list;
    //         newList.movieIds = list.movieIds.concat(movieId);
    //         return newList;
    //       } else if (list.key === 0 && !list.movieIds.includes(movieId)) {
    //         let newList = list;
    //         newList.movieIds = list.movieIds.filter(id => id != movieId);
    //         return newList;
    //       } else {
    //         return list;
    //       }
    //     })

  default:
    return state
  }
}

export default listReducer;
import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js"

const initialState = {
  firstName: "Erin",
  lastName: "Thigpen",
  movies: [
    { movieId: "12cfb892-aac0-4c5b-94af-521852e46d6a"},
    { movieId: "58611129-2dbc-4a81-a72f-77ddfc1b1b49"}
    ],
  lists: [
      {key: 0, label: "watched", required: true, movieIds: ["12cfb892-aac0-4c5b-94af-521852e46d6a"]},
      {key: 1, label: "favorites", required: false, movieIds: ["12cfb892-aac0-4c5b-94af-521852e46d6a", "58611129-2dbc-4a81-a72f-77ddfc1b1b49"]},
      {key: 2, label: "to-watch", required: false, movieIds: []}
  ],
  display: []
}

export default initialState;
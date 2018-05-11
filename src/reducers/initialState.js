// import {ADD_MOVIE, DELETE_MOVIE} from "../actions/actions.js"

const initialState = {
  firstName: "Erin",
  lastName: "Thigpen",
  movies: [
    { id: "12cfb892-aac0-4c5b-94af-521852e46d6a", listKeys: [0, 2]},
    { id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49", listKeys: [0, 1]},
    { id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e", listKeys: [1]}
    ],
  lists: [
      {key: 0, label: "watched", required: true},
      {key: 1, label: "favorites", required: false},
      {key: 2, label: "to-watch", required: false}
  ],
  display: [],
  displayListKey: 0,
}

export default initialState;
import React, {Component} from "react";
import FilterableMovieTable from "./Components/FilterableMovieTable.js";

const MOVIES = [
  {movieTitle: 'Top Gun', seen: true, infoLink: '#', orderNum: 1},
  {movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#', orderNum: 2},
  {movieTitle: 'Notting Hill', seen: true, infoLink: '#', orderNum: 4},
  {movieTitle: 'Atonement', seen: true, infoLink: '#', orderNum: 5},
  {movieTitle: 'Fight Club', seen: true, infoLink: '#', orderNum: 6},
  {movieTitle: 'Pulp Fiction', seen: false, infoLink: '#', orderNum: 3}
];

class App extends Component {
  render() {
    return (
      <div>
        <FilterableMovieTable movies={MOVIES} />
      </div>
    );
  }
}
  
export default App;
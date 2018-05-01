import React, {Component} from "react";
import FilterableMovieTable from "./Components/FilterableMovieTable.js";

const MOVIES = [
  {movieTitle: 'Top Gun', seen: true, infoLink: '#', position: 1},
  {movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#', position: 2},
  {movieTitle: 'Notting Hill', seen: true, infoLink: '#', position: 4},
  {movieTitle: 'Atonement', seen: true, infoLink: '#', position: 5},
  {movieTitle: 'Fight Club', seen: true, infoLink: '#', position: 6},
  {movieTitle: 'Pulp Fiction', seen: false, infoLink: '#', position: 3}
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
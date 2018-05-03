import React, {Component} from "react";
import FilterableMovieTable from "./Components/FilterableMovieTable.js";

// const MOVIES = [
//   {id: 0, movieTitle: 'Top Gun', seen: true, infoLink: '#', position: 1},
//   {id: 1, movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#', position: 2},
//   {id: 2, movieTitle: 'Notting Hill', seen: true, infoLink: '#', position: 4},
//   {id: 3, movieTitle: 'Atonement', seen: true, infoLink: '#', position: 5},
//   {id: 4, movieTitle: 'Fight Club', seen: true, infoLink: '#', position: 6},
//   {id: 5, movieTitle: 'Pulp Fiction', seen: false, infoLink: '#', position: 3}
// ];

class App extends Component {
  render() {
    return (
      <div>
        <FilterableMovieTable />
      </div>
    );
  }
}
  
export default App;
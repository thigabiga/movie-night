import React, {Component} from 'react';
import SearchBar from "./SearchBar.js";
import MovieTable from "./MovieTable.js";

class FilterableMovieTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      seenOnly: false,
      movies: [
        {id: 0, movieTitle: 'Top Gun', seen: true, infoLink: '#', position: 1},
        {id: 1, movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#', position: 2},
        {id: 2, movieTitle: 'Notting Hill', seen: true, infoLink: '#', position: 4},
        {id: 3, movieTitle: 'Atonement', seen: true, infoLink: '#', position: 5},
        {id: 4, movieTitle: 'Fight Club', seen: true, infoLink: '#', position: 6},
        {id: 5, movieTitle: 'Pulp Fiction', seen: false, infoLink: '#', position: 3}
      ]
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);

  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleSeenOnlyChange(seenOnly) {
    this.setState({
      seenOnly: seenOnly
    })
  }

  handleOnDelete(idd) {
    this.setState(prevState => ({
        movies: prevState.movies.filter( movie => movie.id !== idd )
    }));
  }
  
  render() {
    return (
      <div>
        <SearchBar
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onSeenOnlyChange={this.handleSeenOnlyChange}
        />
        <MovieTable
        movies={this.state.movies}
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        onDelete={this.handleOnDelete.bind(this)}
        />
      </div>
    );
  }
}

export default FilterableMovieTable;
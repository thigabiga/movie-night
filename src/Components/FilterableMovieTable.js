import React, {Component} from 'react';
import SearchBar from "./SearchBar.js";
import MovieTable from "./MovieTable.js";

class FilterableMovieTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieTable movies={this.props.movies} />
      </div>
    );
  }
}

export default FilterableMovieTable;
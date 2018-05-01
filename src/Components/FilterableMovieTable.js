import React, {Component} from 'react';
import SearchBar from "./SearchBar.js";
import MovieTable from "./MovieTable.js";

class FilterableMovieTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      seenOnly: false
    };
  }
  
  render() {
    return (
      <div>
        <SearchBar
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        />
        <MovieTable
        movies={this.props.movies}
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        />
      </div>
    );
  }
}

export default FilterableMovieTable;
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
        movies={this.props.movies}
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        />
      </div>
    );
  }
}

export default FilterableMovieTable;
import React, {Component} from 'react';
import MovieRow from "./MovieRow.js";

class MovieTable extends Component {
  
  deleteMovie(id) {
      this.props.onDelete(id);
  }


  render() {
    const filterText = this.props.filterText;
    const seenOnly = this.props.seenOnly;

    const rows = [];
    
    sortByPosition(this.props.movies).forEach((movie) => {
      if (movie.movieTitle.indexOf(filterText) === -1) {
        return;
      }
      if (seenOnly && !movie.seen) {
        return;
      }
      rows.push(
        <MovieRow
        onDelete={this.deleteMovie.bind(this)} 
        movie={movie}
        key={movie.id} />
      );
    });

    return (
    <table class="movie-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Movie</th>
          <th>Seen</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
  }
}

function sortByPosition(movieList) {
  let byNum = movieList.slice(0);
  byNum.sort(function(a,b) {
    return a.position - b.position;
  });
  return byNum;
}

export default MovieTable;
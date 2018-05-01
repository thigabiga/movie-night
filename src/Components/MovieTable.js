import React, {Component} from 'react';
import MovieRow from "./MovieRow.js";

class MovieTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const seenOnly = this.props.seenOnly;

    const rows = [];
    
    this.props.movies.forEach((movie) => {
      if (movie.movieTitle.indexOf(filterText) === -1) {
        return;
      }
      if (seenOnly && !movie.seen) {
        return;
      }
      rows.push(
        <MovieRow
        movie={movie}
        key={movie.movieTitle} />
      );
    });

    return (
    <table>
      <thead>
        <tr>
            <th>No.</th>
            <th>Movie</th>
            <th>Seen</th>
            <th>Info</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
  }
}

export default MovieTable;
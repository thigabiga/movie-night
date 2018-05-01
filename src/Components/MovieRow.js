import React, {Component} from 'react';

class MovieRow extends Component {
  render() {
    const movie = this.props.movie;
    const seenMovie = String(movie.seen);
    const movieTitle = movie.seen ?
    movie.movieTitle :
      <span style={{color: 'red'}}>
        {movie.movieTitle}
      </span>;

    return (
      <tr>
        <td>{movie.orderNum}</td>
        <td>{movieTitle}</td>
        <td>{seenMovie}</td>
        <td><a href="{movie.infoLink}">Link</a></td>
      </tr>
    );
  }
}

export default MovieRow;
import React, {Component} from 'react';

class MovieRow extends Component {

  deleteMovie(id) {
      this.props.onDelete(id);
  }

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
        <td>{movie.position}</td>
        <td><a href="{movie.infoLink}" target="_blank">{movieTitle}</a></td>
        <td>{seenMovie}</td>
        <td><button>Edit</button></td>
        <td><button onClick={this.deleteMovie.bind(this, this.props.movie.id)}>Remove</button></td>
      </tr>
    );
  }
}

export default MovieRow;
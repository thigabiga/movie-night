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
        <td>{movie.position}</td>
        <td>{movieTitle}</td>
        <td>{seenMovie}</td>
        <td><a href="{movie.infoLink}">Link</a></td>
        <td><button>Up</button></td>
        <td><button>Down</button></td>
        <td><button>Edit</button></td>
        <td><button>Remove</button></td>
      </tr>
    );
  }
}

export default MovieRow;
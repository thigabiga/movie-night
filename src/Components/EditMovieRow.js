import React, {Component} from 'react';

class EditMovieRow extends Component {

  constructor(props) {
    super();
    this.handleSeenItEdit = this.handleSeenItEdit.bind(this);
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
  }

  cancelEdit(event) {
    event.preventDefault();
    this.props.onCancelEdit();
  }

  saveEdit(event) {
    event.preventDefault();
    this.props.onEdit(this.props.newMovieTitle, this.props.newPosition, this.props.seenIt);
  }

  handleTitleEdit(e) {
    this.props.onTitleEdit(e.target.value);
  }

  handleSeenItEdit(e) {
    this.props.onSeenItEdit(e.target.checked);
  }

  render() {
    const movie = this.props.movie;
    const seenMovie = String(movie.seen);
    const movieTitle = movie.movieTitle;
    // const movieTitle = movie.seen ?
    // movie.movieTitle :
    //   <span style={{color: 'red'}}>
    //     {movie.movieTitle}
    //   </span>;

    return (
      <form onSubmit={this.saveEdit.bind(this)}>
        <tr>
          <td>
            <input 
            type="text" 
            placeholder={movie.position} 
            value={this.props.newPosition} 
            onChange={this.handlePositionEdit} 
            />
          </td>
          <td>
            <input
            type="text"
            placeholder={movieTitle}
            value={this.props.newMovieTitle}
            onChange={this.handleTitleEdit}
            />
          </td>
          <td>
            <input
            type="checkbox"
            placeholder={movieTitle}
            checked={this.props.seenIt}
            onChange={this.handleSeenItEdit}
            />
          </td>
          <td><button type="submit">Save</button></td>
          <td><button onClick={this.cancelEdit.bind(this)}>Cancel</button></td>
        </tr>
      </form>
    );
  }
}

export default EditMovieRow;
import React, {Component} from 'react';

class EditMovieRow extends Component {

  constructor(props) {
    super();
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
    this.handleEditSeenItChange = this.handleEditSeenItChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  cancelEdit(event) {
    event.preventDefault();
    this.props.cancelEdit();
  }

  saveEdit(event) {
    event.preventDefault();
    console.log(this, this.editMovieTitle, this.newPosition, this.editSeenIt);
    this.props.saveEdit(this.editMovieTitle, this.newPosition, this.editSeenIt);
  }

  handlePositionChange(e) {
    this.props.onPositionChange(e.target.value);
  }

  handleEditTitleChange(e) {
    this.props.onEditTitleChange(e.target.value);
  }

  handleEditSeenItChange(e) {
    this.props.onEditSeenItChange(e.target.checked);
  }

  render() {
    const movie = this.props.movie;
    // const seenMovie = String(movie.seen);
    const movieTitle = movie.movieTitle;

    return (
      <tr><td colSpan="5">
        <form onSubmit={this.saveEdit}>
            <input 
            type="text" 
            placeholder={movie.position} 
            value={this.newPosition} 
            onChange={this.handlePositionChange} 
            />
            <input
            type="text"
            placeholder={movieTitle}
            value={this.editMovieTitle}
            onChange={this.handleEditTitleChange}
            />
            <input
            type="checkbox"
            placeholder={movieTitle}
            checked={this.editSeenIt}
            onChange={this.handleEditSeenItChange}
            />
            {' '}
          <button type="submit">Save</button>
          <button onClick={this.cancelEdit}>Cancel</button>
          </form>
        </td></tr>
    );
  }
}

export default EditMovieRow;
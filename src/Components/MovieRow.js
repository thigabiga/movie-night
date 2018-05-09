import React, {Component} from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const deleteIcon = <FontIcon className="material-icons">delete</FontIcon>;
const checkIcon = <FontIcon className="material-icons">check_circle</FontIcon>;

class MovieRow extends Component {

  constructor(props) {
    super();
    this.handleEditSeenItChange = this.handleEditSeenItChange.bind(this);
  }

  deleteMovie(id) {
      this.props.onDelete(id);
  }

  handleEditSeenItChange() {
    this.props.onEditSeenItChange(this.props.movie.id);
  }

  render() {
    const movie = this.props.movie;
    const seenMovie = String(movie.seen);

    const seenIcon = movie.seen ?
      <IconButton
        tooltip="mark not seen"
        tooltipPosition="top-center"
        onClick={this.handleEditSeenItChange}
      >{checkIcon}</IconButton> :

      <IconButton
        tooltip="mark seen"
        tooltipPosition="top-center"
        onClick={this.handleEditSeenItChange}
        disabled={true}
      >{checkIcon}</IconButton>;

    const movieTitle = movie.seen ?
    movie.movieTitle :
      <span style={{color: 'red'}}>
        {movie.movieTitle}
      </span>;

    return (
      <TableRow>
        <TableRowColumn>{movie.position}</TableRowColumn>
        <TableRowColumn><a href="{movie.infoLink}" target="_blank">{movieTitle}</a></TableRowColumn>
        <TableRowColumn>{seenIcon}</TableRowColumn>
        <TableRowColumn>
          <IconButton
            tooltip="delete"
            tooltipPosition="top-center"
            onClick={this.deleteMovie.bind(this, this.props.movie.id)}
          >{deleteIcon}</IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default MovieRow;
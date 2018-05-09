import React, {Component} from 'react';

// STYLES
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

// COMPONENTS
import MovieRow from "./MovieRow.js";
import EditMovieRow from "./EditMovieRow.js";

class MovieTable extends Component {


  constructor(props) {
    super();
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSeenItChange = this.handleSeenItChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
    this.handleEditSeenItChange = this.handleEditSeenItChange.bind(this);
  }

  cancelEdit(event) {
    // event.preventDefault();
    this.props.onCancelEdit();
  }

  saveEdit(title, position, seen) {
    // event.preventDefault();
    console.log(title, position, seen, this);
    this.props.onSaveEdit(this.key, position, title, seen);
  }

  handlePositionChange(e) {
    this.props.onPositionChange(e);
  }

  handleTitleChange(e) {
    this.props.onTitleChange(e);
  }

  handleSeenItChange(e) {
    this.props.onSeenItChange(e);
  }

  handleEditTitleChange(e) {
    this.props.onEditTitleChange(e);
  }

  handleEditSeenItChange(id) {
    this.props.onEditSeenItChange(id);
  }
  
  deleteMovie(id) {
      this.props.onDelete(id);
  }

  editMovie(id) {
    this.props.onEdit(id);
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
      if (this.props.editId === movie.id) {
        rows.push(
          <EditMovieRow

          editId={this.props.editId}
          editSeenIt={this.props.editSeenIt}
          editMovieTitle={this.props.editMovieTitle}
          newPosition={this.props.newPosition}

          cancelEdit={this.cancelEdit}
          saveEdit={this.saveEdit}
          onPositionChange={this.handlePositionChange}
          onEditTitleChange={this.handleEditTitleChange}
          onEditSeenItChange={this.handleEditSeenItChange}
          movie={movie}
          key={movie.id} />
        );
      } else {
        rows.push(
          <MovieRow
          onEditSeenItChange={this.handleEditSeenItChange}
          onDelete={this.deleteMovie.bind(this)} 
          movie={movie}
          key={movie.id} />
        );
      }
    });

    return (
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>No.</TableHeaderColumn>
          <TableHeaderColumn>Movie</TableHeaderColumn>
          <TableHeaderColumn>Seen</TableHeaderColumn>
          <TableHeaderColumn>Delete</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
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
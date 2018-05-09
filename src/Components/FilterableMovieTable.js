import React, {Component} from 'react';
import SearchBar from "./SearchBar.js";
import MovieTable from "./MovieTable.js";
import MovieForm from "./MovieForm.js";

class FilterableMovieTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      seenOnly: false,
      movies: [
        {id: 0, movieTitle: 'Top Gun', seen: true, infoLink: '#', position: 1},
        {id: 1, movieTitle: 'When Harry Met Sally', seen: true, infoLink: '#', position: 2},
        {id: 2, movieTitle: 'Notting Hill', seen: true, infoLink: '#', position: 4},
        {id: 3, movieTitle: 'Atonement', seen: true, infoLink: '#', position: 5},
        {id: 4, movieTitle: 'Fight Club', seen: true, infoLink: '#', position: 6},
        {id: 5, movieTitle: 'Pulp Fiction', seen: false, infoLink: '#', position: 3}
      ],
      newMovieTitle: '',
      editMovieTitle: '',
      seenIt: false,
      editSeenIt: false,
      editId: null,
      newPosition: undefined
    }
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSeenItChange = this.handleSeenItChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
    this.handleEditSeenItChange = this.handleEditSeenItChange.bind(this);
  }

  handleCancelEdit() {
    this.setState({
      editId: null
    })
  }

  handleOnEdit(idd) {
    this.setState({
      editId: idd
    })
  }

  handlePositionChange(newPosition) {
    this.setState({
      newPosition: newPosition
    })
  }

  handleTitleChange(newTitle) {
    this.setState({
      newMovieTitle: newTitle
    })
  }

  handleEditTitleChange(newTitle) {
    this.setState({
      editMovieTitle: newTitle
    })
  }

  handleEditSeenItChange(idd) {
    this.setState(prevState => ({
      movies: prevState.movies.map( (e) => {
        if (e.id === idd) {
          let newE = e;
          newE.seen = !e.seen;
          return newE;
        } else {
          return e;
        }
      })
    }));
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

  handleAddMovie(title, seenIt) {
    const newId = getNextID(this.state.movies);
    const newPosition = getNextPosition(this.state.movies);
    const newObj = {id: newId, movieTitle: title, seen: seenIt, infoLink: '#', position: newPosition};
    this.setState(prevState => ({
      movies: prevState.movies.concat( newObj ),
      newMovieTitle: '',
      seenIt: false
    }));
  }

  handleOnDelete(idd) {
    this.setState(prevState => ({
      movies: prevState.movies.filter( movie => movie.id !== idd )
    }));
  }

  handleSeenItChange(seenIt) {
    this.setState({
      seenIt: seenIt
    })
  }

  handleSaveEdit(idd, position, title, seen) {
    console.log(idd, position, title, seen)
    // const newList = changePosition(this.state.movies, newPosition);
    // const newObj = {id: idd, movieTitle: title, seen: seenIt, infoLink: '#', position: newPosition};
    // this.setState(prevState => ({
    //   movies: prevState.movies.filter( movie => movie.id !== idd ).concat(newObj)
    // }));
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
        movies={this.state.movies}
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        editId={this.state.editId}
        editSeenIt={this.state.editSeenit}
        editMovieTitle={this.state.editMovieTitle}
        newPosition={this.state.newPosition}
        onEdit={this.handleOnEdit.bind(this)}
        onCancelEdit={this.handleCancelEdit}
        onPositionChange={this.handlePositionChange}
        onSaveEdit={this.handleSaveEdit}
        onEditTitleChange={this.handleEditTitleChange}
        onEditSeenItChange={this.handleEditSeenItChange}
        onDelete={this.handleOnDelete.bind(this)}
        />
        {/* <MovieForm 
        newMovieTitle={this.state.newMovieTitle}
        seenIt={this.state.seenIt}
        onSeenItChange={this.handleSeenItChange}
        onTitleChange={this.handleTitleChange}
        onAdd={this.handleAddMovie.bind(this)}
        /> */}
      </div>
    );
  }
}

export default FilterableMovieTable;


function getNextID(listOfObjs) {
  let x = 0;
  listOfObjs.forEach( e => {
    if (e.id > x) {
      x = e.id;
    }
  })
  return x + 1;
};

function getNextPosition(listOfObjs) {
  let x = 0;
  listOfObjs.forEach( e => {
    if (e.position > x) {
      x = e.position;
    }
  })
  return x + 1;
};

function changePosition(listOfObjs, newPosition) {
  let newListOfObjs = []
  listOfObjs.forEach( e => {
    if (e.id < newPosition) {
      newListOfObjs.push(e);
    } else if (e.id === newPosition) {
      let newObj = e;
      newObj.id = newPosition;
      newListOfObjs.push(newObj);
    } else {
      let newObj = e;
      newObj.id = newPosition + 1;
      newListOfObjs.push(newObj);
    }
  })
  return newListOfObjs;
};
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
      seenIt: false,
      editId: null
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSeenItChange = this.handleSeenItChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);
  }

  handleTitleChange(newTitle) {
    this.setState({
      newMovieTitle: newTitle
    })
  }

  handleSeenItChange(seenIt) {
    this.setState({
      seenIt: seenIt
    })
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

  handleOnEdit(idd) {
    this.setState(prevState => ({
      movies: prevState.movies
    }))
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
        onDelete={this.handleOnDelete.bind(this)}
        />
        <MovieForm 
        newMovieTitle={this.state.newMovieTitle}
        seenIt={this.state.seenIt}
        onSeenItChange={this.handleSeenItChange}
        onTitleChange={this.handleTitleChange}
        onAdd={this.handleAddMovie.bind(this)} />
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
import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

// import SearchBar from "./SearchBar.js";
// import MovieTable from "./MovieTable.js";

// REDUX
import {connect} from 'react-redux';
import {addMovieToList, deleteMovieFromList, loadMoviesFromList} from "../actions/actions.js"

// MATERIAL UI
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

// ICONS
const deleteIcon = <FontIcon className="material-icons">delete</FontIcon>;
const checkIcon = <FontIcon className="material-icons">check_circle</FontIcon>;
const emptyCheckIcon = <FontIcon className="material-icons">check_circle_outline</FontIcon>;
const addIcon = <FontIcon className="material-icons">library_add</FontIcon>;
const filterIcon = <FontIcon className="material-icons">filter_list</FontIcon>;

const baseURL = "https://ghibliapi.herokuapp.com";

class FilterableMovieTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      moviesLoaded: [],
      open: false,

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
    // this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSeenItChange = this.handleSeenItChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);
    this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
    this.handleEditSeenItChange = this.handleEditSeenItChange.bind(this);
  }


  componentDidMount() {
    axios.get(baseURL + "/films")
      .then( res => {
        const newData = res.data;
        this.setState(prevState => ({
          moviesLoaded: prevState.moviesLoaded.concat( newData )
          })
        );
      })
  }

  handleRequestDelete = (listKey, movieId) => {
    this.props.onDeleteChip(listKey, movieId);
  };

  handleRequestAddMovie = (listKey, movieId) => {
    this.props.onAddChip(listKey, movieId);
  };

  handleLoadMovies = (listKey) => {
    this.props.onLoadMovies(listKey)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


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
  }
  
  render() {

    const renderMovies = this.props.displayMovies.map( movie => {
      let newMovie = movie;
      this.state.moviesLoaded.forEach( e => {
        if ( e.id === movie.id && movie.listKeys.includes(0) ) {
          newMovie.seen = true;
          newMovie.title = e.title;
        }
      })
      return newMovie;
    })

    return (
      <div>
        {/* <SearchBar
        filterText={this.state.filterText}
        seenOnly={this.state.seenOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onSeenOnlyChange={this.handleSeenOnlyChange}
        /> */}


        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconButton
              tooltip="filter list"
              tooltipPosition="bottom-right"
              onClick={this.handleToggle}
            >{filterIcon}</IconButton>
            <Link to="/browse">
              <IconButton
                tooltip="add movie"
                tooltipPosition="bottom-right"
              >{addIcon}</IconButton>
            </Link>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Favorites" />
          </ToolbarGroup>
          {/* <ToolbarGroup>
            <TextField
              hintText="Search..."
              value={this.props.filterText}
              onChange = {this.handleFilterTextChange}
            />
          </ToolbarGroup> */}
        </Toolbar>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Subheader>My Lists</Subheader>
          {this.props.userLists.map( list =>
            <MenuItem 
              primaryText={list.label} 
              value={list.key} 
              key={list.key} 
              onClick={() => this.handleLoadMovies(list.key)}
            />
          
          )}

          {/* <MenuItem>Filter</MenuItem>
          <MenuItem>          
            <Checkbox
              label="Erin's Seen"
              checked={this.props.seenOnly} 
              onCheck = {this.handleSeenOnlyChange}
            />
          </MenuItem> */}

          {/* <MenuItem>
            <RaisedButton
              label="Done"
              onClick={this.handleClose}
            />
          </MenuItem> */}

        </Drawer>





        <IconButton
          tooltip="show movies"
          tooltipPosition="top-center"
          onClick={() => this.handleLoadMovies(0)}
        >{checkIcon}
        </IconButton>

        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Movie</TableHeaderColumn>
              <TableHeaderColumn>Seen</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {renderMovies.map( movie =>
              <TableRow key={movie.id} >
                <TableRowColumn>
                  <a href="www.google.com" target="_blank">{movie.title}</a>
                </TableRowColumn>
                <TableRowColumn>
                  {movie.seen ? 
                    <IconButton
                      tooltip="mark not seen"
                      tooltipPosition="top-center"
                      onClick={() => this.handleRequestDelete(0, movie.id)}
                    >{checkIcon}
                    </IconButton>
                  :
                    <IconButton
                      tooltip="mark seen"
                      tooltipPosition="top-center"
                      onClick={() => this.handleRequestAddMovie(0, movie.id)}
                    >{emptyCheckIcon}
                    </IconButton>
                  }
                </TableRowColumn>
                <TableRowColumn>
                  <IconButton
                    tooltip="delete"
                    tooltipPosition="top-center"
                    onClick={() => this.handleRequestDelete(0, movie.id)}
                  >{deleteIcon}</IconButton>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userMovies: state.listReducer.movies,
    userLists: state.listReducer.lists,
    displayMovies: state.listReducer.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteChip: (listKey, movieId) => {
      dispatch(deleteMovieFromList(movieId, listKey))
    },
    onAddChip: (listKey, movieId) => {
      dispatch(addMovieToList(movieId, listKey))
    },
    onLoadMovies: (listKey) => {
      dispatch(loadMoviesFromList(listKey))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableMovieTable);


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
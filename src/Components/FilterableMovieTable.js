import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

// REDUX
import {connect} from 'react-redux';
import {toggleSeenMovie, loadMoviesFromList, toggleDeleteMovie} from "../actions/actions.js"

// MATERIAL UI
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
    }
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

  toggleSeen = (seen, movieId) => {
    this.props.onToggleSeen(seen, movieId);
  };

  handleLoadMovies = (listKey) => {
    this.setState({open: !this.state.open})
    this.props.onLoadMovies(listKey)
  }

  handleToggleDelete = (listKey, movieId) => {
    this.props.onToggleDelete(listKey, movieId)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  // handleClose = () => this.setState({open: false});

  render() {

    const listKeyShow = this.props.displayListKey;
    const displayList = this.props.userLists.filter( list => list.key === listKeyShow )[0];
    const displayTitle = displayList.label;

    const renderMovies = this.state.moviesLoaded.map( movie => {
      let newMovie = movie;
      this.props.userMovies.forEach( e => {
        if ( e.id === movie.id ) {
          newMovie.listKeys = e.listKeys;
          // newMovie.title = e.title;
          if ( movie.listKeys.includes(0) ) {
            newMovie.seen = true;
          } else {
            newMovie.seen = false;
          }
          if ( movie.listKeys.includes(listKeyShow) ) {
            newMovie.display = true;
          } else {
            newMovie.display = false;
          }
        }
      })
      return newMovie;
    })

    const reRenderMovies = renderMovies.filter( movie => movie.display );

    // const renderMovies = this.props.displayMovies.map( movie => {
    //   let newMovie = movie;
    //   this.state.moviesLoaded.forEach( e => {
    //     if ( e.id === movie.id && movie.listKeys.includes(0) ) {
    //       newMovie.seen = true;
    //       newMovie.title = e.title;
    //     } else if ( e.id === movie.id && !movie.listKeys.includes(0) ) {
    //       newMovie.seen = false;
    //       newMovie.title = e.title;
    //     }
    //   })
    //   return newMovie;
    // })

    // var displayTitle = "";
    // this.props.userLists.forEach( list => {
    //   if (list.key === this.props.displayListKey) {
    //     displayTitle = list.label;
    //   }
    // })

    return (
      <div>
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
            <ToolbarTitle text={displayTitle} />
          </ToolbarGroup>
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
        </Drawer>

        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Movie</TableHeaderColumn>
              <TableHeaderColumn>Seen</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {reRenderMovies.map( movie =>
              <TableRow key={movie.id} >
                <TableRowColumn>
                  <a href="www.google.com" target="_blank">{movie.title}</a>
                </TableRowColumn>
                <TableRowColumn>
                  {movie.seen ? 
                    <IconButton
                      tooltip="mark not seen"
                      tooltipPosition="top-center"
                      onClick={() => this.toggleSeen(movie.seen, movie.id)}
                    >{checkIcon}
                    </IconButton>
                  :
                    <IconButton
                      tooltip="mark seen"
                      tooltipPosition="top-center"
                      onClick={() => this.toggleSeen(movie.seen, movie.id)}
                    >{emptyCheckIcon}
                    </IconButton>
                  }
                </TableRowColumn>
                <TableRowColumn>
                  <IconButton
                    tooltip="delete"
                    tooltipPosition="top-center"
                    onClick={() => this.handleToggleDelete(this.props.displayListKey, movie.id)}
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
    displayMovies: state.listReducer.display,
    displayListKey: state.listReducer.displayListKey,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleSeen: (seen, movieId) => {
      dispatch(toggleSeenMovie(seen, movieId))
    },
    onToggleDelete: (listKey, movieId) => {
      dispatch(toggleDeleteMovie(listKey, movieId))
    },
    onLoadMovies: (listKey) => {
      dispatch(loadMoviesFromList(listKey))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableMovieTable);
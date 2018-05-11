import React, {Component} from 'react';
import axios from "axios";

// REDUX
import {connect} from 'react-redux';
import {addMovieToList, deleteMovieFromList} from "../actions/actions.js"

// MATERIAL UI
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

// ADD LATER
// import AutoComplete from 'material-ui/AutoComplete';
// import DropDownMenu from 'material-ui/DropDownMenu';

// ICONS
const checkIcon = <FontIcon className="material-icons">check_circle</FontIcon>;
const emptyCheckIcon = <FontIcon className="material-icons">check_circle_outline</FontIcon>;
const addCircleIcon = <FontIcon className="material-icons">add_circle_outline</FontIcon>;

const baseURL = "https://ghibliapi.herokuapp.com";

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  customWidth: {
    width: 200,
  },
};

class RecommendedMovies extends Component {

  constructor(props) {
    super();
    this.state = {
      moviesLoaded: [],
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

  handleRequestDelete = (listKey, movieId) => {
    this.props.onDeleteChip(listKey, movieId);
  };

  handleRequestAddMovie = (listKey, movieId) => {
    this.props.onAddChip(listKey, movieId);
  };

  render () {

    // const test = {}
    // this.props.userMovies.forEach( movie => {
    //   test[movie.id] = movie.listKeys;
    // })
  
    // const renderMovies = this.state.moviesLoaded.map(movie => {
    //   var newList = movie;
    //   var listofkeys = test[movie.id];
    //   var listData = [];
    //   var seenVar = false;
    //   if (listofkeys !== undefined) {
    //     listofkeys.forEach(e => {
    //       this.props.userLists.forEach (f => {
    //         if (e === f.key) {
    //           listData = listData.concat(f);
    //         }
    //         if (e === 0) {
    //           seenVar = true;
    //         }
    //       })
    //     })
    //     newList.lists = listData;
    //     newList.seen = seenVar;
    //   }
    //   return newList;
    // })

    const renderMovies = this.state.moviesLoaded.map( movie => {
      var newMovie = movie;
      var onLists = [];
      var notOnLists = [];
      var allLists = [];

      this.props.userMovies.forEach( userMovie => {
        if ( userMovie.id === movie.id && userMovie.listKeys !== undefined ) {
          newMovie.listKeys = userMovie.listKeys;
          if ( newMovie.listKeys.includes(0) ) {
            newMovie.seen = true;
          } else {
            newMovie.seen = false;
          }
        }
      })

      this.props.userLists.forEach( list => {
        if ( newMovie.listKeys !== undefined && newMovie.listKeys.includes(list.key) ) {
          let newList = list;
          onLists = onLists.concat(newList);
          allLists = allLists.concat(newList);
        } else {
          let newList = list;
          notOnLists = notOnLists.concat(newList);
          allLists = allLists.concat(newList);
        }
      })
      newMovie.listsOn = onLists;
      newMovie.listsNotOn = notOnLists;
      newMovie.listsAll = allLists;
      return newMovie;
    })

    return (
      <div>
        {renderMovies.map(movie =>
          <Card key={movie.id}>
            <CardMedia>
              <img src="images/nature-600-337.jpg" alt="" />
            </CardMedia>
            <CardTitle title={movie.title} subtitle={movie.director} />
            <CardText>{movie.description}</CardText>
            <CardText>Release Date: {movie.release_date}</CardText>
            <CardActions>
              {movie.seen ?
                <FlatButton label="Mark Not Seen" icon={checkIcon} primary={true} onClick={() => this.handleRequestDelete(0, movie.id)} />
                :
                <FlatButton label="Mark As Seen" icon={emptyCheckIcon} primary={true} onClick={() => this.handleRequestAddMovie(0, movie.id)} />
              }

              <IconMenu
                iconButtonElement={<FlatButton label="Add to List" icon={addCircleIcon} primary={true} />}
                open={this.state.openMenu}
                onRequestChange={this.handleOnRequestChange}
              >
              {movie.listsNotOn.map( list => 
                  <MenuItem 
                    key={list.key} 
                    value={list.label} 
                    primaryText={list.label} 
                    onClick={() => this.handleRequestAddMovie(list.key, movie.id)}
                  />
                )}
              </IconMenu>

            </CardActions>

            <CardActions style={styles.wrapper}>
              {movie.listsOn.map( list =>
                <Chip 
                  key={list.key}
                  onRequestDelete={() => this.handleRequestDelete(list.key, movie.id)}
                  style={styles.chip}
                >{list.label}
                </Chip>
              )}
            </CardActions>

          </Card>
        )}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userMovies: state.listReducer.movies,
    userLists: state.listReducer.lists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteChip: (listKey, movieId) => {
      dispatch(deleteMovieFromList(movieId, listKey))
    },
    onAddChip: (listKey, movieId) => {
      dispatch(addMovieToList(movieId, listKey))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
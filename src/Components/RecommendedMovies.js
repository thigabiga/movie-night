import React, {Component} from 'react';
import axios from "axios";

// REDUX
import {connect} from 'react-redux';
import {addMovieToList, deleteMovieFromList} from "../actions/actions.js"

// MATERIAL UI
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
// import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
// import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';

// ICONS
const checkIcon = <FontIcon className="material-icons">check_circle</FontIcon>;
const emptyCheckIcon = <FontIcon className="material-icons">check_circle_outline</FontIcon>;

const baseURL = "https://ghibliapi.herokuapp.com";

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class RecommendedMovies extends Component {

  constructor(props) {
    super();
    this.state = {
      moviesLoaded: [],
      value: 1
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
    // console.log("handleRequestAddMovie", listKey, movieId);
    this.props.onAddChip(listKey, movieId);
  };

  render () {

    const test = {}
    this.props.userMovies.forEach( e => {
      test[e.id] = e.listKeys;
    })
  
    const renderMovies = this.state.moviesLoaded.map(movie => {
      var newList = movie;
      var listofkeys = test[movie.id];
      var listData = [];
      var seenVar = false;
      if (listofkeys !== undefined) {
        listofkeys.forEach(e => {
          this.props.userLists.forEach (f => {
            if (e === f.key) {
              listData = listData.concat(f);
            }
            if (e === 0) {
              seenVar = true;
            }
          })
        })
        newList.lists = listData;
        newList.seen = seenVar;
      }
      return newList;
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
              <FlatButton label="Add To List" />
              <FlatButton label="More Info" />
            </CardActions>
            <CardText style={styles.wrapper}>
              {movie.lists ? movie.lists.map( x => 
                <Chip
                  key={x.key}
                  onRequestDelete={() => this.handleRequestDelete(x.key, movie.id)}
                  style={styles.chip}
                >
                  {x.label}
                </Chip>
              ) : <div></div>
              }
            </CardText>
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
    // currentDisplay: state.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteChip: (listKey, movieId) => {
      dispatch(deleteMovieFromList(movieId, listKey))
    },
    onAddChip: (listKey, movieId) => {
      // console.log("onAddChip", movieId, listKey);
      dispatch(addMovieToList(movieId, listKey))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
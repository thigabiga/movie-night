import React, {Component} from 'react';
import axios from "axios";

// REDUX
import {connect} from 'react-redux';
import {addMovieToList, deleteMovieFromList} from "../actions/actions.js"

// MATERIAL UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

const baseURL = "https://ghibliapi.herokuapp.com";

class RecommendedMovies extends Component {

  constructor(props) {
    super();
    this.state = {
      moviesLoaded: [],
      moviesOnLists: { 
        "12cfb892-aac0-4c5b-94af-521852e46d6a": [{key: 1, label: "favorites"}],
        "58611129-2dbc-4a81-a72f-77ddfc1b1b49": [{key: 1, label: "favorites"}]
        },
      allOfMyLists: {
        1: "favorites",
        2: "to-watch"
      }
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
    this.props.onDeleteChip(movieId, listKey);
    // this.setState(prevState => ({
    //   moviesOnLists: prevState.moviesOnLists[movieId].filter(j => j.key !== listKey)
    // }))
  };

  render () {
    const moviesAndLists = this.state.moviesLoaded.map(movie => {
      let movieList = this.state.moviesOnLists[movie.id];
      if (movieList !== undefined) {
        movie["listsOn"] = movieList;
        movie["saved"] = true;
      } else {
        movie["saved"] = false;
      }
      return movie;
    })



    // const abridgedMovieList = {this.props.userMovies}.map(movie => {
    //   let newObj = {};
    //   newObj[movie.id] = movie.listKeys;
    //   return newObj;
    // })
  
  
  const renderMovies = this.state.moviesLoaded.map(movie => {
    <Card key={movie.id}>
      <CardTitle title={movie.title} subtitle={movie.director} />
      <CardText>{movie.description}</CardText>
      <CardText>Release Date: {movie.release_date}</CardText>
      <CardActions>
        <FlatButton label="Add to List" primary={true} />
        <FlatButton label="More Info" />
      </CardActions>
      <CardText>
        
      </CardText>
    </Card>
  })



    return (
      <div>
        {moviesAndLists.map(movie =>
          <Card key={movie.id}>
            <CardMedia>
              <img src="images/nature-600-337.jpg" alt="" />
            </CardMedia>
            <CardTitle title={movie.title} subtitle={movie.director} />
            <CardText>{movie.description}</CardText>
            <CardText>Release Date: {movie.release_date}</CardText>
            <CardActions>
              <FlatButton label="Add to List" primary={true} />
              <FlatButton label="More Info" />
            </CardActions>
            <CardText>
              {movie.saved ? movie.listsOn.map( x => 
                <Chip
                  key={x.key}
                  onRequestDelete={() => this.handleRequestDelete(x.key, movie.id)}
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
    userMovies: state.movies,
    userLists: state.lists
    // currentDisplay: state.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteChip: (movieId, listKey) => {
      dispatch(deleteMovieFromList(movieId, listKey))
    },
    onAddChip: (movieId, listKey) => {
      dispatch(addMovieToList(movieId, listKey))
    }
  }
}

// export default RecommendedMovies;

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
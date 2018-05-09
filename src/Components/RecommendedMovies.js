import React, {Component} from 'react';
import axios from "axios";

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
      movies: [],
      moviesOnLists: { 
          "12cfb892-aac0-4c5b-94af-521852e46d6a": [{key: 1, label: "favorites"}],
          "58611129-2dbc-4a81-a72f-77ddfc1b1b49": [{key: 1, label: "favorites"}]
        }
    }
  }

  componentDidMount() {
    axios.get(baseURL + "/films")
      .then( res => {
        const newData = res.data;
        this.setState(prevState => ({
          movies: prevState.movies.concat( newData )
          })
        );
      })
  }

  handleRequestDelete = (listKey, movieId) => {
    this.setState(prevState => ({
      moviesOnLists: prevState.moviesOnLists[movieId].filter(j => j.key !== listKey)
    }))
  };

  render () {
    const moviesAndLists = this.state.movies.map(movie => {
      let movieList = this.state.moviesOnLists[movie.id];
      if (movieList !== undefined) {
        movie["listsOn"] = movieList;
        movie["saved"] = true;
      } else {
        movie["saved"] = false;
      }
      return movie;
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

export default RecommendedMovies;
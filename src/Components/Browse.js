import React, {Component} from 'react';
import RecommendedMovies from "./RecommendedMovies.js";

import AppBar from 'material-ui/AppBar';

class Browse extends Component {
  render() {

    return (
      <div>
        <AppBar title="Browse Movies" showMenuIconButton={false} />
        <RecommendedMovies />
      </div>
    )
  }
}

export default Browse;

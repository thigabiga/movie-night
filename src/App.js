import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import FilterableMovieTable from "./Components/FilterableMovieTable.js";
import Home from "./Components/Home.js";
import Browse from "./Components/Browse.js";
import NotFound from "./Components/NotFound.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/browse">Browse</Link>
          </p>
          <p>
            <Link to="/lists">Lists</Link>
          </p>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/browse" component={Browse} />
            <Route path="/lists" component={FilterableMovieTable} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
  
export default App;
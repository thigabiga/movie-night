import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// STYLES
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

// COMPONENTS
import BottomNav from "./Components/BottomNav.js";
import FilterableMovieTable from "./Components/FilterableMovieTable.js";
import Home from "./Components/Home.js";
import Browse from "./Components/Browse.js";
import NotFound from "./Components/NotFound.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <MuiThemeProvider>
          <AppBar title="Movie Night" />
          
        </MuiThemeProvider>

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
            <MuiThemeProvider><Route path="/lists" component={FilterableMovieTable} /></MuiThemeProvider>
            <Route path="/*" component={NotFound} />
          </Switch>

        <MuiThemeProvider>
          <BottomNav />
        </MuiThemeProvider>

        </div>
      </Router>
    );
  }
}
  
export default App;
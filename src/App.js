import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// STYLES
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/browse" component={Browse} />
              <Route path="/library" component={FilterableMovieTable} />
              <Route path="/*" component={NotFound} />
            </Switch>
            <BottomNav />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
  
export default App;
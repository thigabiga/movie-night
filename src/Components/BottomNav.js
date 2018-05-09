import React, {Component} from "react";
import {Link} from 'react-router-dom';

// STYLES
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

// ICONS
const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const bookmarkIcon = <FontIcon className="material-icons">bookmark</FontIcon>;
const browseIcon = <FontIcon className="material-icons">search</FontIcon>;

class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to="/">
            <BottomNavigationItem
              label="Home"
              icon={homeIcon}
              onClick={() => this.select(0)}
            />
          </Link>
          <Link to="/library">
            <BottomNavigationItem
              label="Library"
              icon={bookmarkIcon}
              onClick={() => this.select(1)}
            />
          </Link>
          <Link to="/browse">
            <BottomNavigationItem
              label="Browse"
              icon={browseIcon}
              onClick={() => this.select(2)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;
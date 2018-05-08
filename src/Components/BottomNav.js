import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const bookmarkIcon = <FontIcon className="material-icons">bookmark</FontIcon>;
const browseIcon = <FontIcon className="material-icons">search</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Library"
            icon={bookmarkIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Browse"
            icon={browseIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}


export default BottomNav;
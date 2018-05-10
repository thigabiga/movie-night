import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';

class Library extends Component {
  render() {
    return (
      <div>
        <AppBar title="Library" showMenuIconButton={false} />
        <List>
          <ListItem primaryText="watched" />
          <ListItem primaryText="favorites" />
          <ListItem primaryText="to-watch" />
        </List>
      </div>
    )
  }

}

export default Library;
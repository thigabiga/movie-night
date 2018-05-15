import React, {Component} from 'react';

// STYLES
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

// ICONS
const avatarIcon = <FontIcon className="material-icons">person</FontIcon>;

class Home extends Component {
  render() {
    return (
      <div>
        <AppBar title="Studio Ghibli Movie Night" showMenuIconButton={false} />
        <Card>
          <CardHeader
            title="Erin Thigpen"
            subtitle="thigabiga"
            avatar={<Avatar icon={avatarIcon} />}
          />
          <CardActions>
            <FlatButton label="Edit Profile" />
            <FlatButton label="Settings" />
          </CardActions>
        </Card>
        <Card>
        <CardHeader title="Friends" />
          <List>
            <ListItem primaryText="Hermione Granger" />
            <ListItem primaryText="Ron Weasley" />
          </List>
        </Card>
      </div>
    )
  }
}

export default Home;

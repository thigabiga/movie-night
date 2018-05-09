import React, {Component} from 'react';

// STYLES
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';

// ICONS
const avatarIcon = <FontIcon className="material-icons">person</FontIcon>;

class Home extends Component {
  render() {
    return (
      <div>
        <AppBar title="Movie Night" showMenuIconButton={false} />
        <Card>
          <CardHeader
            title="Erin Thigpen"
            subtitle="thigabiga"
            avatar={<Avatar icon={avatarIcon} />}
          />
        </Card>
      </div>
    )
  }
}

export default Home;

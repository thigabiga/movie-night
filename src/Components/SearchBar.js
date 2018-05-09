import React, {Component} from "react";
import {Link} from 'react-router-dom';

// STYLES
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

// ICONS
const addIcon = <FontIcon className="material-icons">library_add</FontIcon>;
const filterIcon = <FontIcon className="material-icons">filter_list</FontIcon>;

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleSeenOnlyChange(e) {
    this.props.onSeenOnlyChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <Link to="/browse">
              <IconButton
                tooltip="add movie"
                tooltipPosition="bottom-right"
              >{addIcon}</IconButton>
            </Link>
            <IconButton
              tooltip="filter list"
              tooltipPosition="bottom-right"
              onClick={this.handleToggle}
            >{filterIcon}</IconButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Favorites" />
          </ToolbarGroup>
          <ToolbarGroup>
            <TextField
              hintText="Search..."
              value={this.props.filterText}
              onChange = {this.handleFilterTextChange}
            />
          </ToolbarGroup>
        </Toolbar>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Filter</MenuItem>
          <MenuItem>          
            <Checkbox
              label="Erin's Seen"
              checked={this.props.seenOnly} 
              onCheck = {this.handleSeenOnlyChange}
            />
          </MenuItem>
          <MenuItem>
            <RaisedButton
              label="Done"
              onClick={this.handleClose}
            />
          </MenuItem>
        </Drawer>

      </div>
    );
  }
}

export default SearchBar;
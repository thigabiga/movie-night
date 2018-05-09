import React, {Component} from "react";
import {Link} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const addIcon = <FontIcon className="material-icons">library_add</FontIcon>;
const filterIcon = <FontIcon className="material-icons">filter_list</FontIcon>;

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSeenOnlyChange = this.handleSeenOnlyChange.bind(this);
  }

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
        <form>
          <Checkbox
            label="Seen Only."
            checked={this.props.seenOnly} 
            onCheck = {this.handleSeenOnlyChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
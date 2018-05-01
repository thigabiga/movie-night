import React, {Component} from "react";

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
      <form>
        <input type="text" 
        placeholder="Search..." 
        value={this.props.filterText}
        onChange = {this.handleFilterTextChange}
        />
        <p>
          <input type="checkbox" 
          checked={this.props.seenOnly} 
          onChange = {this.handleSeenOnlyChange}
          />
          {' '}
          Only show movies I've seen.
        </p>
      </form>
    );
  }
}

export default SearchBar;
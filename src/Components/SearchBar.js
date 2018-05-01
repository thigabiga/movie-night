import React, {Component} from "react";

class SearchBar extends Component {
  render() {
    const filterText = this.props.filterText;
    const seenOnly = this.props.seenOnly;

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} />
        <p>
          <input type="checkbox" checked={seenOnly} />
          {' '}
          Only show movies I've seen.
        </p>
      </form>
    );
  }
}

export default SearchBar;
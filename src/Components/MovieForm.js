import React, {Component} from 'react';


class MovieForm extends Component {

  constructor(props) {
    super();
    this.handleSeenItChange = this.handleSeenItChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.state = {
    //   newMovieTitle: "",
    //   newSeenIt: null
    // }
  }

  addMovie1(title, seenIt) {
    this.preventDefault();
    this.props.onAdd(title, seenIt);
  }

  addMovie(event) {
    event.preventDefault();
    this.props.onAdd(this.props.newMovieTitle, this.props.seenIt);
  }

  // handleChange(event) {
  //   this.setState({newSeenIt: event.target.value});
  // }

  handleTitleChange(e) {
    this.props.onTitleChange(e.target.value);
  }

  handleSeenItChange(e) {
    this.props.onSeenItChange(e.target.checked);
  }

  render() {
    const newMovieTitle = this.props.newMovieTitle;
    const seenIt = this.props.seenIt;
    return (
      <div>
        <form onSubmit={this.addMovie.bind(this)}>
          <input type="text" 
          placeholder="Movie Title" 
          value={this.props.newMovieTitle}
          onChange = {this.handleTitleChange}
          />
          <input type="checkbox" 
          checked={this.props.seenIt} 
          onChange = {this.handleSeenItChange}
          />
          {' '}
          Seen it.
          <button type="submit">Save</button>
        </form>


        
      </div>
    )
  }
}

export default MovieForm;
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit(this);
  }

  handleChange(evt) {
    this.setState({ term: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // TODO:
    // Make sure we call, callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSumit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

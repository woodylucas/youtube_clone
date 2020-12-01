import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(term) {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />I have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;

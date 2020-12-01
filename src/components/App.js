import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
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

  handleClick(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <VideoDetail video={selectedVideo} />
        <VideoList handleClick={this.handleClick} videos={videos} />
      </div>
    );
  }
}

export default App;

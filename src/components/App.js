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
    this.handleClick = this.handleClick.bind(this);
  }

  async handleSubmit(term) {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: data.items,
      selectedVideo: data.items[0],
    });
  }

  handleClick(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column ">
              <VideoList handleClick={this.handleClick} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

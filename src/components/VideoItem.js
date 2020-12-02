import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, handleClick }) => {
  return (
    <div onClick={() => handleClick(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title.replace(/(&quot\;)/g, '"')}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

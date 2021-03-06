import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleClick }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        handleClick={handleClick}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

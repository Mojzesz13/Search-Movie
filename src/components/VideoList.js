import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelected }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });

  return <div className='ui divided animated list'>{renderList}</div>;
};

export default VideoList;

import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import BreadCrumb from '../components/BreadCrumb/index';
import Spinner from '../components/Spinner/index';
import VideoInfo from '../components/VideoInfo/index';
// Hook
import { useVideoFetch } from '../hooks/useVideoFetch';
// Image

function Video() {
  const { videoId } = useParams();

  const { state: video, loading, error } = useVideoFetch(videoId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb videoTitle={video.snippet.title} />
      <VideoInfo video={video} />
    </>
  );
}

export default Video;
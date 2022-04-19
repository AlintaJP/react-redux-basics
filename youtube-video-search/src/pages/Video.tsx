import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import BreadCrumb from '../components/BreadCrumb/index';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner/index';
import VideoInfo from '../components/VideoInfo/index';
// Hook
import { useVideoFetch } from '../hooks/useVideoFetch';
// Constants
import { ERROR_MESSAGE } from '../constants/errorMessages';

const Video: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();

  const { video, isLoading, isError } = useVideoFetch(videoId!);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage message={ERROR_MESSAGE} />;

  return (
    <main>
      <BreadCrumb videoTitle={video!.title} />
      <VideoInfo video={video!} />
    </main>
  );
};

export default Video;

import { useState, useEffect } from 'react';
// API
import { fetchVideo } from '../services/youtubeService';
// Helpers
import { getSessionState, setSesstionState } from '../helpers/sesstionStateHelper';
// Models
import Video from '../models/videoModel';

export const useVideoFetch = (videoId: string) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchVideo(videoId);

        setVideo({
          ...data,
        });
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    const sessionState = getSessionState(videoId);

    if (sessionState) {
      setVideo(sessionState);
      setIsLoading(false);
      return;
    }

    getVideo();
  }, [videoId]);

  useEffect(() => {
    setSesstionState(videoId, video);
  }, [videoId, video]);

  return { video, isLoading, isError };
};

import { useState, useEffect } from 'react';
// API
import API, { Video } from '../API';
// Helpers
import isPersistedState from '../helpers/isPersistedState';

export const useVideoFetch = (videoId: string) => {
  const [state, setState] = useState<Video>({} as Video);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        setError(false);

        const video = await API.fetchVideo(videoId);

        setState({
          ...video.items[0],
        });
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    };

    const sessionState = isPersistedState(videoId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchVideo();
  }, [videoId]);

  useEffect(() => {
    sessionStorage.setItem(videoId, JSON.stringify(state));
  }, [videoId, state]);

  return { state, loading, error };
};

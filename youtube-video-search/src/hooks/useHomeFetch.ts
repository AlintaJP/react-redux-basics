import { useState, useEffect } from 'react';
// API
import { fetchVideos } from '../services/youtubeService';
// Helpers
import { getSessionState, setSesstionState, HOME_STATE } from '../helpers/sesstionStateHelper';
// Models
import Video from '../models/videoModel';
import SearchedVideo from '../models/videoSearchResultModel';

const initialState = {
  total_pages: 0,
  items: [] as ReadonlyArray<Video> | ReadonlyArray<SearchedVideo>,
  pageToken: '',
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getVideos = async (searchTitle: string, pageToken = '') => {
    try {
      setIsError(false);
      setIsLoading(true);

      const data = await fetchVideos(searchTitle, pageToken);

      setVideos((prev) => ({
        total_pages: prev.total_pages + 1,
        items: [...prev.items, ...data.items],
        pageToken: data.pageToken,
      }));
    } catch (err) {
      console.error(err);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = getSessionState(HOME_STATE);

      if (sessionState) {
        setVideos(sessionState);
        return;
      }
    }

    setVideos(initialState);
    getVideos(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    getVideos(searchTerm, videos.pageToken);
    setIsLoadingMore(false);
  }, [isLoadingMore, videos.pageToken, searchTerm]);

  useEffect(() => {
    if (!searchTerm) setSesstionState(HOME_STATE, videos);
  }, [searchTerm, videos]);

  return { videos, isLoading, isError, searchTerm, setSearchTerm, setIsLoadingMore };
};

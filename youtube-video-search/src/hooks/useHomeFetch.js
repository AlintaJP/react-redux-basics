import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import isPersistedState from '../helpers/isPersistedState';

const initialState = {
  total_pages: 0,
  items: [],
  nextPageToken: '',
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // searchTerm = searchTitle, different naming to escape shadowing

  const fetchVideos = async (searchTitle, nextPageToken) => {
    try {
      setError(false);
      setLoading(true);

      const videos = await API.fetchVideos(searchTitle, nextPageToken);

      setState((prev) => ({
        ...videos,
        total_pages: prev.total_pages + 1,
        items: [...prev.items, ...videos.items],
        nextPageToken: videos.nextPageToken,
      }));
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }

    setState(initialState);
    fetchVideos(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchVideos(searchTerm, state.nextPageToken);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.nextPageToken, searchTerm]);

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};

import qs from 'qs';
import axios from 'axios';

const BASE_API_URL = 'https://youtube.googleapis.com/youtube/v3';
const VIDEOS_URL = '/videos';
const SEARCH_URL = '/search';

const getRequest = async (url, params) => {
  const response = await axios.get(url, {
    params,
    paramsSerializer: () => qs.stringify(params, { arrayFormat: 'comma' }),
  });

  return response.data;
};

const apiSettings = {
  fetchVideos: async (searchTerm, nextPageToken) => {
    const commonParams = {
      maxResults: 20,
      regionCode: 'US',
      key: process.env.REACT_APP_API_KEY,
      pageToken: nextPageToken,
    };

    const popularParams = {
      ...commonParams,
      part: ['snippet', 'contentDetails', 'statistics'],
      chart: 'mostPopular',
    };

    const searchParams = {
      ...commonParams,
      part: 'snippet',
      q: searchTerm,
    };

    const params = searchTerm ? { ...searchParams } : { ...popularParams };

    const url = searchTerm ? BASE_API_URL + SEARCH_URL : BASE_API_URL + VIDEOS_URL;

    return getRequest(url, params);
  },

  fetchVideo: async (videoId) => {
    const params = {
      part: ['snippet', 'contentDetails', 'statistics'],
      key: process.env.REACT_APP_API_KEY,
      id: videoId,
    };

    const url = BASE_API_URL + VIDEOS_URL;

    return getRequest(url, params);
  },
};

export default apiSettings;

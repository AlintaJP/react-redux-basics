import qs from 'qs';
import axios from 'axios';

const BASE_API_URL = 'https://youtube.googleapis.com/youtube/v3';
const VIDEOS_URL = '/videos';
const SEARCH_URL = '/search';

export type Video = {
  id: string & { videoId: string };

  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle: string;
    title: string;
    description: string;

    publishedAt: Date;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
  };
};

export type Videos = {
  total_pages: number;
  items: Video[];
  nextPageToken: string;
};

interface CommonParams {
  maxResults: number;
  regionCode: string;
  key: string;
  pageToken: string;
}

interface PopularParams extends CommonParams {
  part: string[];
  chart: string;
}

interface SearchParams extends CommonParams {
  part: string;
  q: string;
}

type VideoParams = {
  part: string[];
  key: string;
  id: string;
};

const getRequest = async (url: string, params: PopularParams | SearchParams | VideoParams) => {
  const response = await axios.get(url, {
    params,
    paramsSerializer: () => qs.stringify(params, { arrayFormat: 'comma' }),
  });

  return response.data;
};

const apiSettings = {
  fetchVideos: async (searchTerm: string, nextPageToken: string) => {
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

    return getRequest(url, <PopularParams | SearchParams>params);
  },

  fetchVideo: async (videoId: string) => {
    const params = {
      part: ['snippet', 'contentDetails', 'statistics'],
      key: process.env.REACT_APP_API_KEY,
      id: videoId,
    };

    const url = BASE_API_URL + VIDEOS_URL;

    return getRequest(url, <VideoParams>params);
  },
};

export default apiSettings;

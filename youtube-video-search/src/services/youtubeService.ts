import qs from 'qs';
import axios from 'axios';
import { VIDEOS_URL, SEARCH_URL } from '../constants/urls';
import { MAX_RESULTS, REGION_CODE } from '../constants/youtube';
import {
  CommonParams,
  PopularParams,
  SearchParams,
  VideoParams,
  YoutubeVideoPagedList,
  YoutubeVideoList,
  YoutubeVideoSearchResultPagedList,
} from './models/youtubeModels';
import videoMapper from '../mappers/videoMapper';
import videoPagedListMapper from '../mappers/videoPagedListMapper';
import videoSearchResultPagedListMapper from '../mappers/videoSearchResultPagedListMapper';

const getRequest = async (url: string, params: PopularParams | SearchParams | VideoParams) => {
  const response = await axios.get(url, {
    params,
    paramsSerializer: () => qs.stringify(params, { arrayFormat: 'comma' }),
  });

  return response.data;
};

export const fetchVideos = async (searchTerm: string, pageToken: string) => {
  const commonParams: CommonParams = {
    maxResults: MAX_RESULTS,
    regionCode: REGION_CODE,
    key: process.env.REACT_APP_API_KEY!,
    pageToken,
  };

  const popularParams: PopularParams = {
    ...commonParams,
    part: ['snippet', 'contentDetails', 'statistics'],
    chart: 'mostPopular',
  };

  const searchParams: SearchParams = {
    ...commonParams,
    part: 'snippet',
    q: searchTerm,
  };

  const params = searchTerm ? searchParams : popularParams;
  const url = searchTerm ? SEARCH_URL : VIDEOS_URL;

  if (searchTerm) {
    const response: YoutubeVideoSearchResultPagedList = await getRequest(url, params);
    return videoSearchResultPagedListMapper.map(response);
  } else {
    const response: YoutubeVideoPagedList = await getRequest(url, params);
    return videoPagedListMapper.map(response);
  }
};

export const fetchVideo = async (videoId: string) => {
  const params: VideoParams = {
    part: ['snippet', 'contentDetails', 'statistics'],
    key: process.env.REACT_APP_API_KEY!,
    id: videoId,
  };

  const url = VIDEOS_URL;

  const response: YoutubeVideoList = await getRequest(url, params);
  const mappedVideo = videoMapper.map(response.items[0]);
  return mappedVideo;
};

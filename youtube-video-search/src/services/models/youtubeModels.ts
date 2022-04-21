export type YoutubeVideo = {
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

export type YoutubeVideoSearchResult = {
  id: {
    videoId: string;
  };
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
};

export type YoutubeVideoPagedList = {
  items: YoutubeVideo[];
  nextPageToken: string;
};

export type YoutubeVideoSearchResultPagedList = {
  items: YoutubeVideoSearchResult[];
  nextPageToken: string;
};

export type YoutubeVideoList = {
  items: YoutubeVideo[];
};

export interface CommonParams {
  maxResults: number;
  regionCode: string;
  key: string;
  pageToken: string;
}

export interface PopularParams extends CommonParams {
  part: string[];
  chart: string;
}

export interface SearchParams extends CommonParams {
  part: string;
  q: string;
}

export type VideoParams = {
  part: string[];
  key: string;
  id: string;
};

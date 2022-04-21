import { YoutubeVideoSearchResult } from '../services/models/youtubeModels';
import VideoSearchResult from '../models/videoSearchResultModel';

class VideoSearchResultMapper {
  map(searchedYoutubeVideo: YoutubeVideoSearchResult) {
    return new VideoSearchResult(
      searchedYoutubeVideo.id.videoId,
      searchedYoutubeVideo.snippet.thumbnails.high.url,
      searchedYoutubeVideo.snippet.channelTitle,
      searchedYoutubeVideo.snippet.title,
      searchedYoutubeVideo.snippet.description,
      searchedYoutubeVideo.snippet.publishedAt,
    );
  }

  mapCollection(searchedYoutubeVideos: YoutubeVideoSearchResult[]) {
    return searchedYoutubeVideos.map(this.map);
  }
}

export default new VideoSearchResultMapper();

import { YoutubeVideo } from '../services/models/youtubeModels';
import Video from '../models/videoModel';

class VideoMapper {
  map(youtubeVideo: YoutubeVideo) {
    const id = youtubeVideo.id.videoId ? youtubeVideo.id.videoId : youtubeVideo.id;

    return new Video(
      id,
      youtubeVideo.snippet.thumbnails.high.url,
      youtubeVideo.snippet.channelTitle,
      youtubeVideo.snippet.title,
      youtubeVideo.snippet.description,
      youtubeVideo.snippet.publishedAt,
      youtubeVideo.statistics.viewCount,
      youtubeVideo.statistics.likeCount,
    );
  }

  mapCollection(youtubeVideos: YoutubeVideo[]) {
    return youtubeVideos.map(this.map);
  }
}

export default new VideoMapper();

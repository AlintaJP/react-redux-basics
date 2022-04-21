import videoMapper from './videoMapper';
import { YoutubeVideoPagedList } from '../services/models/youtubeModels';
import PagedListModel from '../models/pagedListModel';

class VideoPagedListMapper {
  map(pagedList: YoutubeVideoPagedList) {
    const items = videoMapper.mapCollection(pagedList.items);
    return new PagedListModel(items, pagedList.nextPageToken);
  }
}

export default new VideoPagedListMapper();

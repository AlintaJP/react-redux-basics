import videoSearchResultMapper from './videoSearchResultMapper';
import { YoutubeVideoSearchResultPagedList } from '../services/models/youtubeModels';
import PagedListModel from '../models/pagedListModel';

class VideoSearchResultPagedListMapper {
  map(pagedList: YoutubeVideoSearchResultPagedList) {
    const items = videoSearchResultMapper.mapCollection(pagedList.items);
    return new PagedListModel(items, pagedList.nextPageToken);
  }
}

export default new VideoSearchResultPagedListMapper();

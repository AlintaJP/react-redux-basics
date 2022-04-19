export default class VideoSearchResult {
  constructor(
    public id: string,
    public imageUrl: string,
    public channelTitle: string,
    public title: string,
    public description: string,
    public publishedAt: Date,
  ) {}
}

export default class PagedList<T> {
  constructor(public items: T[], public pageToken: string) {}
}

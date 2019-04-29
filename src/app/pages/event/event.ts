export class Event {
  constructor(
    public id: number,
    public tag: string,
    public title: string,
    public description: string,
    public url: string,
    public thumbnailUrl: string,
    public date: Date = new Date()
  ) {}
}

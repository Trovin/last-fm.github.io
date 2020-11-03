interface IImage {
  size: string,
  ['#text']: string
}

export class TrackData {
  name: string;
  artist: {
    url: string,
    name: string
  };
  image: IImage[]

  constructor(data: any) {
    if (data) {
      this.name = data.name;
      this.image = data.image;
      this.artist = data.artist;
    }
  }
}

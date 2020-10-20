import {Artist} from "./Artist";

export class Album {
  name: String;
  artist: Artist;

  constructor({name,artist}: {name: String; artist: Artist;}) {
    this.name=name;
    this.artist=artist;
  }
}
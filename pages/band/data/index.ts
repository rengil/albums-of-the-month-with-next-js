import {Album} from "../model/Album";
import {Artist} from "../model/Artist";

export const getAlbums = () => {
  const bowie = new Artist({name: 'David Bowie'});
  const album = new Album({name: 'Heroes', artist: bowie});


  const national = new Artist({name: 'The National'});
  const album2 = new Album({name: 'Easy to Find', artist: national});
  return [album, album2];

} 
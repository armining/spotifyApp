import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {


  private searchUrl:string;
  private artistUrl:string;
  private albumUrl:string;
  private artistAlbumUrl:string;

  constructor(private _http:Http) { }

  //Services to get data From Spotify Web APIs
  //All the APIs can be fount ==> https://developer.spotify.com/web-api/endpoint-reference/

  searchMusic(str:string, type='artist') {
    this.searchUrl= 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type;
      return this._http.get(this.searchUrl)
        .map(res =>res.json());
  }

  getArtist(id:string) {
    this.artistUrl= 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl)
      .map(res =>res.json());
  }

  getAlbum(artistId:string) {
    this.albumUrl= 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._http.get(this.albumUrl)
      .map(res =>res.json());
  }

  getArtistAlbum(id:string) {
    this.artistAlbumUrl= 'https://api.spotify.com/v1/albums/'+id;
    return this._http.get(this.artistAlbumUrl)
      .map(res =>res.json());
  }
}

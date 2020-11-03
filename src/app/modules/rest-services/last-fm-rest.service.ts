import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrackData } from '@models/TrackData.model';

@Injectable({
  providedIn: 'root'
})
export class LastFmRestService {

  private topTracks = new BehaviorSubject<TrackData[]>(null);

  constructor(private http: HttpClient) { }

  getTopTracks(): Observable<TrackData[]> {
    if (this.topTracks.value) {
      return this.topTracks.asObservable();
    }

    return this.http.get<any>('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json&limit=50&page=1')
      .pipe(map( res => {
        const items = res.tracks.track;
        const data = items.map(item => new TrackData(item));
        this.topTracks.next(data);
        return data;
      }));
  }

  getTrackByName(track: string): Observable<TrackData[]> {
    return this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=YOUR_API_KEY&format=json`);
  }

}

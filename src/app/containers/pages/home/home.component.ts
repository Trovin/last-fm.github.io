import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TrackData } from '@models/TrackData.model';
import { LastFmRestService } from '@modules/rest-services/last-fm-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  data: TrackData[] = [];
  stream = new Subscription();

  constructor(private lastFmRestService: LastFmRestService) {}

  ngOnInit(): void {
    this.stream = this.lastFmRestService.getTopTracks()
      .subscribe(items => this.data = items);
  }

  ngOnDestroy(): void {
    this.stream.unsubscribe();
  }

}

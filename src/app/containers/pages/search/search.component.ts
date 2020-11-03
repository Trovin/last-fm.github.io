import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { LastFmRestService } from '../../../modules/rest-services/last-fm-rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  foundTrack$: Observable<Object>;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private lastFmRestService: LastFmRestService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.foundTrack$ = this.lastFmRestService.getTrackByName(this.form.value.trackName);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      trackName: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

}

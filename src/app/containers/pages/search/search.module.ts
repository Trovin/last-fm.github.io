import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }

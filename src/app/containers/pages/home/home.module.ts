import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TableWithPaginationModule } from '@containers/common/table-with-pagination/table-with-pagination.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TableWithPaginationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

import { Component, ViewChild, Input, OnChanges, OnInit, AfterViewInit } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TrackData } from '@models/TrackData.model';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.scss']
})
export class TableWithPaginationComponent implements OnChanges, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() items: TrackData[];

  dataSource: MatTableDataSource<TrackData>;

  displayedColumns = [
    'name',
    'artistName',
    'image',
    'artistUrl'
  ];

  ngOnChanges(): void {
    this.initTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private initTableData() {
    this.dataSource = new MatTableDataSource<TrackData>([]);

    this.dataSource = new MatTableDataSource(this.items);
    this.dataSource.data = this.items;

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

import { UnloadingSearchService } from './../unloading-search/service/unloading-search.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { CompetitorUnloading } from '../unloading-search/model/unloading.model';

@Component({
  selector: 'app-unloading-list',
  templateUrl: './unloading-list.component.html',
  styleUrls: ['./unloading-list.component.css']
})
export class UnloadingListComponent implements OnInit {
  unloadingSubscription: Subscription;
  displayedColumns: string[] = [
    "id",
    "plant",
    "competitor",
    "product",
    "edit",
    "delete"
  ];
  dataSource = new MatTableDataSource<CompetitorUnloading>();
  constructor(private searchService : UnloadingSearchService) { }

  ngOnInit() {
    this.unloadingSubscription = this.searchService.unloadingsChanged.subscribe(res => {this.dataSource.data = res.content});
    this.searchService.getUnloadingList();
  }

}

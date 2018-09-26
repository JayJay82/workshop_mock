import { UnloadingSearchService } from './service/unloading-search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-unloading-search',
  templateUrl: './unloading-search.component.html',
  styleUrls: ['./unloading-search.component.css']
})
export class UnloadingSearchComponent implements OnInit {
  documentFilter: string = "";
  plantFilter: string = "";
  competitorFilter: string = "";
  id : FormControl = new FormControl();
 
  fromdate: FormControl = new FormControl(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );
  todate: FormControl = new FormControl(new Date());
  constructor(private searchService : UnloadingSearchService) { }

  ngOnInit() {
    
  }
  applyFilter() {
    this.searchService.getUnloadingList(this.id.value);
  }

}

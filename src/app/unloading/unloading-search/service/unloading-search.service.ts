import { GenericResponse } from './../../../shared/response.model';
import { CompetitorUnloading } from './../model/unloading.model';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UnloadingSearchService {
  private UnloadingListURI: string = "http://localhost:3000/competitorUnloading";
  constructor(private httpClient : HttpClient) { }
  unloadingsChanged = new Subject<GenericResponse<CompetitorUnloading[]>>();
 getUnloadingList(
      id? : string,
      plant?: string,
      competitor?: string,
      documentNumber?: string,
      fromDate?: Date,
      toDate?: Date
    ) {
      //let params: URLSearchParams = new URLSearchParams();
      let params = new HttpParams();
      if(id != null) { params = params.append("id",id);}
    
      this.httpClient.get<CompetitorUnloading[]>(this.UnloadingListURI, {params : params}).pipe(map(res => {
          return new GenericResponse<CompetitorUnloading[]>("200",res,"");
      }))
      .subscribe(data => {
        this.unloadingsChanged.next(data)
      })
  
 }
}

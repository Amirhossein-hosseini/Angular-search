import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) { }

  getData(value:any):Observable<data[]>{
    const api ='https://test-api.phaa.ir/Ostan';
    return this.http.get<data[]>(api);
    // return this.http.get<data[]>(api)

  }
}

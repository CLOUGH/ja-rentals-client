import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from './apartment';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private url = 'http://localhost:3000/api/v1/apartments';

  constructor(private http: HttpClient) { }

  getListings(filter?: any): Observable<Apartment[]> {
    return this.http.get(`${this.url}?per_page=100${filter && filter.statusFilter ? `&status=${filter.statusFilter}` : ''}`).pipe(
      map(res => {
        return res as Apartment[];
      })
    );
  }

  update(id, apartment: Apartment): Observable<Apartment> {

    return this.http.put(`${this.url}/${id}`, apartment).pipe(
      map(res => res as Apartment)
    );
  }
}

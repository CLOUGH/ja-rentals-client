import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import formurlencode from 'form-urlencoded';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Apartment, ApartmentListing } from './apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private url = `${environment.apiUrl}/api/v1/apartments`;

  constructor(private http: HttpClient) { }

  getListings(filter?: any): Observable<ApartmentListing> {
    return this.http.get(`${this.url}?${formurlencode(filter)}`).pipe(
      map(res => {
        return res as ApartmentListing;
      })
    );
  }

  update(id, apartment: Apartment): Observable<Apartment> {

    return this.http.put(`${this.url}/${id}`, apartment).pipe(
      map(res => res as Apartment)
    );
  }
}

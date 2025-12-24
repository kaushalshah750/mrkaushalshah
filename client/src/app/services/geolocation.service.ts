import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

export interface IpApiResponse {
  country: string;        // full country name, e.g. "India"
  country_code: string;   // ISO country code, e.g. "IN"
  // ... other fields
}

@Injectable({ providedIn: 'root' })

export class GeolocationService {
  private apiUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) { }

  isInIndia() {
    return this.http.get<IpApiResponse>(this.apiUrl).pipe(
      map(resp => resp.country_code === 'IN'),
      catchError(err => {
        console.error('Geo-IP lookup failed', err);
        // treat errors as “not India” (or you could default to false/true as you prefer)
        return of(false);
      })
    );
  }
}

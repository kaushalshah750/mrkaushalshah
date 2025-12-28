import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Local development mein localhost, Production mein tera domain
  private apiUrl = environment.production ? 'https://mrkaushalshah.com/api' : 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  getProjectBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${slug}`);
  }
}
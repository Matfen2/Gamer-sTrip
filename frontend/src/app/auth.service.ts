import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/trip';

  getGamesByTitle(title: string): Observable<any> {
    return this._http.get(`${this.apiUrl}/games/title/${title}`);
  }

  searchGame(title: any): Observable<any> {
    const params = new HttpParams().set('title', title);
    return this._http.get(`${this.apiUrl}/title/${title}`, { params });
  }
}

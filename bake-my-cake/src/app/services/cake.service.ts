import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  // URL: string = 'http://localhost:3000/cakes';
  URL: string = 'https://bake-my-cake-angular-app-json-server.vercel.app/cakes';

  constructor(private http: HttpClient) {}

  getCakes(): Observable<Array<Cake>> {
    return this.http.get<Cake[]>(this.URL);
  }

  getCake(id?: number): Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`)
  }
}

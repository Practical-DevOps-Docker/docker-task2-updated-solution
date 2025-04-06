import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = `${environment.apiUrl}/api`;

  getUsers() {
    return this.http.get(`${this.rootURL}/users`);
  }

  addUser(user: any) {
    return this.http.post(`${this.rootURL}/user`, {user});
  }

}

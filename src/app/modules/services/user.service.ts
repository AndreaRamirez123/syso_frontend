import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SaveUser } from '../models/SaveUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${environment.sysoApi}/get-all-users`);
  }

  saveUser(user: SaveUser) {
    return this.http.put(`${environment.sysoApi}/insert-user`, user, {responseType:'json'});
  }
}

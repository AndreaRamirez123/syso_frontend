import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  searchUser(email:string, password:string) {
    const body = {
      email,
      password
    }
    return this.http.post(`${environment.sysoApi}/search-user`,body);
  }

  getMenuByProfileId(profileId: number) {
    const body = {
      profileId
    }
    return this.http.post(`${environment.sysoApi}/get-menu-by-profile-id`,body);
  }
}

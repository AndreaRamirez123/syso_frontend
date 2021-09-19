import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getAllProfiles() {
    return this.http.get(`${environment.sysoApi}/get-all-profiles`);
  }

  saveProfile() {
    return this.http.post(`${environment.sysoApi}/save-profile`, {});
  }
}

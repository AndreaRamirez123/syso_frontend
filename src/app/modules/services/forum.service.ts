import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getAllForums() {
    return this.http.get(`${environment.sysoApi}/get-all-forums`);
  }

  saveForum(forum: any) {
    return this.http.put(`${environment.sysoApi}/insert-forum`, forum);
  }
}

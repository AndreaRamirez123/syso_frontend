import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private http: HttpClient) { }

  getAllDocumentTypes() {
    return this.http.get(`${environment.sysoApi}/get-all-document-types`);
  }
}

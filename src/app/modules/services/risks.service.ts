import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RiskModel } from '../models/RiskModel';

@Injectable({
  providedIn: 'root'
})
export class RisksService {

  constructor(private http: HttpClient) { }

  getAllRisks() {
    return this.http.get(`${environment.sysoApi}/get-all-risks`);
  }

  saveRisk(risk: RiskModel) {
    return this.http.post(`${environment.sysoApi}/save-risk`, risk, {responseType:'json'});
  }
}

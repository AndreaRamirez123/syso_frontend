import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key:string, val:string | [] | object) {
    const value = (typeof val === 'object') ? JSON.stringify(val) : val;
    sessionStorage.setItem(btoa(key), value);
  }

  getItem(key:string) {
    return sessionStorage.getItem(btoa(key)) ? this.textDecrypt(sessionStorage.getItem(btoa(key))) : undefined;
  }

  textEncryt(text: any) {
    text = window.btoa(unescape(encodeURIComponent(text)));
    return text;
  }

  textDecrypt(value: any) {
    return decodeURIComponent(escape(window.atob(value)));
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}

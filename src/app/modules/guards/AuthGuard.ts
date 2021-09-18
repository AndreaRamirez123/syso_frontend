import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { SS_LOGIN } from '../config/storage-keys';
import { StorageService } from '../services/storage.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private storage: StorageService, private router: Router) { }

    canActivate() {
        // si el usuario no se ha logueado sera devuelto al login
        const isLogin = JSON.parse(this.storage.getItem(SS_LOGIN));
        if(isLogin.length === 0) {
            this.storage.clearSessionStorage();
            this.router.navigate(['site/login']);
            return false;
        }
        return true;
    }
}
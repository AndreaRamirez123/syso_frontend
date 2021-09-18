import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SS_LOGIN, SS_USER_INFO } from '../../config/storage-keys';
import { UserInfo } from '../../models/UserInfo';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  
  menu: any[] = [];
  userData: UserInfo;

  constructor(private router: Router,
    private storage: StorageService,
    private auth: AuthenticationService) {

    this.userData = {
      document_type_id: 0,
      profile_id: 0,
      user_id: 0
    };
  }

  ngOnInit(): void {
    this.userData = JSON.parse(this.storage.getItem(SS_USER_INFO)) as UserInfo;
    this.auth.getMenuByProfileId(this.userData.profile_id).subscribe((response) => {
      this.menu = response as [];
    })
  }

  closeSession() {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "¡Por favor confirme si desea salir del sistema!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar',
      confirmButtonText: 'Sí, cerrar sesión!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.storage.clearSessionStorage();
        this.router.navigate(['site/login']);
      }
    })
  }

}

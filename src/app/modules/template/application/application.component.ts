import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SS_LOGIN, SS_USER_INFO } from '../../config/storage-keys';
import { UserInfo } from '../../models/UserInfo';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';

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
      this.validateSession();
  }

  ngOnInit(): void {
    
  }

  validateSession() {
    if(! this.storage.getItem(SS_LOGIN)) {
      this.storage.clearSessionStorage();
      this.router.navigate(['/site/login']);
    } else {
      this.userData = JSON.parse(this.storage.getItem(SS_USER_INFO)) as UserInfo;

      this.auth.getMenuByProfileId(this.userData.profile_id).subscribe((response) => {
        console.log('menu', response);
        this.menu = response as [];
      })

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SS_LOGIN, SS_USER_INFO } from '../../config/storage-keys';
import { UserInfo } from '../../models/UserInfo';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private builder:FormBuilder,
    private auth: AuthenticationService,
    private storage: StorageService,
    private route: Router) {

    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  submit() {
    const { email, password } = this.form.value;
    this.auth.searchUser(email, password).subscribe((response) => {
      if(response) {
        const data = response as UserInfo;

        this.storage.setItem(SS_LOGIN, 'true');
        this.storage.setItem(SS_USER_INFO, data);

        this.route.navigate(['application/home'])

      } else {
        console.log('El usuario no existe!');
        this.storage.setItem(SS_LOGIN, 'false');
      }
    },
    (err) => {
      console.error('ha ocurrido un error con el servicio', err);
    })
  }
}

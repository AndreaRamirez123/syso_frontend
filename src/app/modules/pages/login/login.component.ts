import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInfo } from '../../models/UserInfo';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private builder:FormBuilder,
    private auth: AuthenticationService) {

    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  submit() {
    console.log('Lo que hay en el formulario es: ', this.form.value);
    const { email, password } = this.form.value;
    this.auth.searchUser(email, password).subscribe((response) => {
      console.log(response);
      const data = response as UserInfo;
      console.log('Login', data);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SS_USER_INFO } from '../../config/storage-keys';
import { SaveUser } from '../../models/SaveUser';
import { UserInfo } from '../../models/UserInfo';
import { DocumentTypeService } from '../../services/document-type.service';
import { ProfileService } from '../../services/profile.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData: UserInfo;
  form: FormGroup;
  showForm: string = 'none';
  profilesList: any[] = [];
  documentTypesList: any[] = [];
  usersList: any[] = [];

  constructor(private builder:FormBuilder,
    private storage: StorageService,
    private profileService: ProfileService,
    private documentTypeService: DocumentTypeService,
    private userService: UserService) {

    this.form = builder.group({
      profile_id: ['', Validators.required],
      document_type_id: ['', Validators.required],
      document_number: ['',Validators.required],
      first_name: ['', Validators.required],
      second_name: [''],
      first_lastname: ['' ,Validators.required],
      second_lastname: [''],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });

    this.userData = {
      document_type_id: 0,
      profile_id: 0,
      user_id: 0
    };
  }

  async ngOnInit() {
    this.userData = JSON.parse(this.storage.getItem(SS_USER_INFO)) as UserInfo;
    
    await Promise.all([
      this.getProfiles(),
      this.getDocumentTypes(),
      this.getUsers(),
    ]);
  }

  async getProfiles() {
    this.profileService.getAllProfiles().subscribe((response) => {
      this.profilesList = response as [];
    },
    (err) => {
      console.log('getProfiles-Error', err);
    })
  }

  async getDocumentTypes() {
    this.documentTypeService.getAllDocumentTypes().subscribe((response) => {
      this.documentTypesList = response as [];
    },
    (err) => {
      console.log('getDocumentTypes-Error', err);
    })
  }

  async getUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.usersList = response as [];
    },
    (err) => {
      console.log('getUsers-Error', err);
    })
  }

  toggleForm() {
    this.showForm = (this.showForm === 'none') ? 'block' : 'none';
  }

  async submit() {
    console.log(this.form.value);
    try {
      const user = this.form.value as SaveUser;
      const response = await this.userService.saveUser(user).toPromise();
      
      Swal.fire({
        title: 'Usuario creado',
        text: "Se ha registrado el usuario correctamente",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ngOnInit();
        }
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Ha ocurrido un error',
        text: "Algo falló al guardar el usuario",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ngOnInit();
        }
      })
    }
  }
}

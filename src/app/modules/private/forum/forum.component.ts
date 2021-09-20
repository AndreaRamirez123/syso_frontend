import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SS_USER_INFO } from '../../config/storage-keys';
import { UserInfo } from '../../models/UserInfo';
import { ForumService } from '../../services/forum.service';
import { RisksService } from '../../services/risks.service';
import { StorageService } from '../../services/storage.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  showForm: string = 'none';
  userData: UserInfo;
  form: FormGroup;
  risksList: any[] = [];
  forumsList: any[] = [];
  subject: string = '';
  description: string = '';

  constructor(private builder:FormBuilder,
    private riskService: RisksService,
    private forumService: ForumService,
    private storage: StorageService) {

    this.form = builder.group({
      risk_id: ['', Validators.required],
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
      this.getAllRisks(),
      this.getAllForums(),
    ])
  }

  getAllRisks() {
    this.riskService.getAllRisks().subscribe((response)=>{
      this.risksList = response as [];
    });
  }

  getAllForums() {
    this.forumService.getAllForums().subscribe((response)=>{
      this.forumsList = response as [];
    })
  }

  toggleForm() {
    this.showForm = (this.showForm === 'none') ? 'block' : 'none';
  }

  selectRisk(event: any) {
    const riskId = event.form.value.risk_id;
    const risk = this.risksList.filter(item => item.risk_id == riskId);
    this.subject     = risk[0].name;
    this.description = risk[0].description;
  }

  async submit() {
    const forum = {
      risk_id: this.form.controls['risk_id'].value,
      user_id: this.userData.user_id
    };
    this.forumService.saveForum(forum).subscribe((response) => {
      console.log('save forum:: ', response);
      Swal.fire({
        title: 'Foro creado',
        text: "Se ha registrado el foro correctamente",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ngOnInit();
        }
      })
    }, (err) => {
      console.log('error risk::', err);
      Swal.fire({
        title: 'Ha ocurrido un error',
        text: "Algo falló al guardar el foro",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ngOnInit();
        }
      });
    });
  }
}

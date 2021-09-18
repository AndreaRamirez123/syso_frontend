import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SS_USER_INFO } from '../../config/storage-keys';
import { RiskModel } from '../../models/RiskModel';
import { UserInfo } from '../../models/UserInfo';
import { RisksService } from '../../services/risks.service';
import { StorageService } from '../../services/storage.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.css']
})
export class RisksComponent implements OnInit {
  userData: UserInfo;
  form: FormGroup;
  showForm: string = 'none';
  risksList: any[] = [];

  constructor(private riskService: RisksService,
    private storage: StorageService,
    private builder:FormBuilder,
    private router: Router) {
      this.form = builder.group({
        name: ['', [Validators.required]],
        description: ['', Validators.required]
      });

      this.userData = {
        document_type_id: 0,
        profile_id: 0,
        user_id: 0
      };

    }

  ngOnInit(): void {
    this.userData = JSON.parse(this.storage.getItem(SS_USER_INFO)) as UserInfo;
    this.riskService.getAllRisks().subscribe((response)=>{
      this.risksList = response as [];
    })
  }
  
  toggleForm() {
    this.showForm = (this.showForm === 'none') ? 'block' : 'none';
  }

  submit() {
    const { name, description } = this.form.value;
    const risk: RiskModel = {
      name,
      description,
      user_id: this.userData.user_id
    };

    this.riskService.saveRisk(risk).subscribe((response) => {
      console.log('save risk:: ', response);
      Swal.fire({
        title: 'Riesgo creado',
        text: "Se ha registrado el riesgo correctamente",
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
        text: "Algo falló al guardar el riesgo",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ngOnInit();
        }
      })
    });
  }
}

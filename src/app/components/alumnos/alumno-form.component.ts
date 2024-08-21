import { Component, inject, OnInit } from '@angular/core';
import { CommonFormComponent } from '../common/common-form.component';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.css'
})
export class AlumnosFormComponent 
extends CommonFormComponent<Student, StudentService> implements OnInit {

  private fotoSeleccionada?: File;

  constructor(service: StudentService,
    route: ActivatedRoute,
    router: Router) {
      super(service, route, router);
      this.title =  'Crear alumnos';
      this.model = new Student();
      this.redirect = '/alumnos';
      this.modelName = Student.name;
  }

  seleccionarFoto(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
    if(this.fotoSeleccionada === undefined) return;
    if(this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = undefined;
      this.toastr.error('Error','Solo se permiten imagenes');
    }
  }

  public override crear(): void {
    if(this.model === undefined) return;
    if(!this.fotoSeleccionada) {
      super.crear();
    } else {
      this.service.crearConFoto(this.model, this.fotoSeleccionada)
      .subscribe(alumno => {
        console.log(alumno);
        this.toastr.success('Success',`${this.modelName} ${alumno.nombre} creado con éxito`);
        this.router.navigate([this.redirect])
      }, err => {
        if(err.status === 400) {
          this.error = err.error;
          console.warn(this.error)
        }
      });
    }
  }

  public override editar(): void {
    if(this.model === undefined) return;
    if(!this.fotoSeleccionada) {
      super.editar();
    } else {
      this.service.editarConFoto(this.model, this.fotoSeleccionada)
      .subscribe(alumno => {
        console.log(alumno);
        this.toastr.success('Modificado',`${this.modelName} ${alumno.nombre} actualizado con éxito`);
        this.router.navigate([this.redirect])
      }, err => {
        if(err.status === 400) {
          this.error = err.error;
          console.warn(this.error)
        }
      });
    }
  }

}

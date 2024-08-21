import { Component, OnInit, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { ListarComponent } from '../common/listar/listar.component';
import { Student } from '../../models/Student';
import { StudentService } from '../../services/student.service';
import { BASE_ENDPOINT } from '../../config/app';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [MatSlideToggleModule, MatSnackBarModule, MatCardModule, MatIconModule, MatButtonModule, 
    MatTableModule, MatPaginator,
  RouterLink],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent 
extends ListarComponent<Student, StudentService> implements OnInit {

  baseEndPoint = BASE_ENDPOINT + '/alumnos';

  private _snackBar = inject(MatSnackBar);
  
  mostrarColumnasAlumnos: string[] = ['name', 'lastname', 'createAt', 'actions']
  clickedRows = new Set<Student>();

  constructor(service: StudentService) {
    super(service);
    this.title="Students List";
    this.modelName=Student.name;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  clickedRow(row: Student) {
    if(this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }

}

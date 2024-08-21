import { Student } from '../models/Student';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CommonService<Student> {

  protected override baseEndPoint = BASE_ENDPOINT + '/alumnos';
  
  constructor(http: HttpClient) {
    super(http);
  }

  public doPost(student: Student, file: File): Observable<Student> {
    const formData: FormData = new FormData();
    formData.append('archivo', file);
    formData.append('nombre', student.nombre || "");
    formData.append('apellido', student.apellido || "");
    return this.http.post<Student>(this.baseEndPoint + '/crear-con-foto', formData);
  }

  public crearConFoto(alumno: Student, archivo: File): Observable<Student> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre || "");
    formData.append('apellido', alumno.apellido || "");
    return this.http.post<Student>(this.baseEndPoint + '/crear-con-foto', 
      formData)
  }

  public editarConFoto(alumno: Student, archivo: File): Observable<Student> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre || "");
    formData.append('apellido', alumno.apellido || "");
    return this.http.put<Student>(this.baseEndPoint + `/editar-con-foto/${alumno.id}`, 
      formData)
  }
}

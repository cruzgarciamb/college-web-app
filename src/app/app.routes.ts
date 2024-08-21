import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NgModule } from '@angular/core';
import { AlumnosFormComponent } from './components/alumnos/alumno-form.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'alumnos' },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'alumnos/form', component: AlumnosFormComponent},
    { path: 'alumnos/form/:id', component: AlumnosFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
import { Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'alumnos' },
    { path: 'alumnos', component: AlumnosComponent }
];

import { Component, OnInit, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [MatSlideToggleModule, MatSnackBarModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    console.log("Alumnos component uikit");
    this.openSnackBar("Hola!", "Bye!");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

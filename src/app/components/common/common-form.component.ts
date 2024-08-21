import { Component, Directive, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Generic } from '../../models/generic';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, ToastNoAnimation } from 'ngx-toastr';

@Directive()
export class CommonFormComponent<E extends Generic, S extends CommonService<E>> implements OnInit {

  title?: string;
  model?: E;
  error?: any;

  protected redirect?: string;
  protected modelName?: string;

  public toastr = inject(ToastrService);

  constructor(protected service: S,
    protected route: ActivatedRoute,
    protected router: Router
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || 0);
      if(id) {
        this.service.getById(id).subscribe(m => {
          this.model = m;
          this.title = 'Editar ' + this.modelName;
        })
      }
    });
  }

  public crear(): void {
    if (this.model === undefined) return;
    this.service.post(this.model).subscribe(m => {
      this.router.navigate([this.redirect]);
      this.toastr.success('Created', 'Item was created');
    }, err => {
      if(err.status === 400) {
        this.error = err.error;
        this.toastr.error('Error', err.error);
      }
    });
  }

  public editar(): void {
    if (this.model === undefined) return;
    this.service.put(this.model).subscribe(m => {
      this.toastr.success('Modified', `${this.modelName} ${m.nombre} actualizado con éxito`);
      this.router.navigate([this.redirect])
    }, err => {
      if(err.status === 400) {
        this.error = err.error;
        this.toastr.error('Error', err.error);
      }
    });
  }

}

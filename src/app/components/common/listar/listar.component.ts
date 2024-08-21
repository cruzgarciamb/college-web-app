import { CommonService } from './../../../services/common.service';
import { Component, Directive, Inject, OnInit, inject } from '@angular/core';
import { Generic } from '../../../models/generic';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';


@Directive()
export class ListarComponent<E extends Generic, S extends CommonService<E>> implements OnInit {
  
  title?: string;
  items?: E[];
  protected modelName?: string;

  itemsSize = 0;
  currentPage = 0;
  itemsByPage = 4;
  pageSizeOptions = [5, 10, 25];

  constructor(@Inject(CommonService) private service: S) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  paginar(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.itemsByPage = event.pageSize;
    this.calcularRangos();
  }

  private calcularRangos() {
    this.service.getByPage(this.currentPage.toString(), this.itemsByPage.toString())
      .subscribe(p => {
        // this.paginator._intl.itemsPerPageLabel = 'Registros por página:'
        this.items = p.content as E[];
        this.itemsSize = p.totalElements as number;
      });
  }
  
  eliminar(e: E) {
    console.log("Eliminar", e);
  }

}

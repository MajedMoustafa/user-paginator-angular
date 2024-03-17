import { Component, OnInit } from '@angular/core';
import { PaginatonService } from '../../paginaton.service';

import { PageEvent } from '@angular/material/paginator';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent extends BaseComponent implements OnInit {

  pageSize: number | undefined;
  pageSizeOptions: number[] | undefined;
  length: number | undefined;
  pageIndex: number | undefined;
  toSearchFor;
  searchCounter = 0;

  constructor(private paginatonService: PaginatonService) { super(); }

  ngOnInit(): void {
    this.paginatonService.pageUpdates.subscribe(
      pageInfo => {
        this.pageIndex = pageInfo.page;
        this.fillPageParams(pageInfo);
      },
      error => console.log(error)
    );
    }

  fillPageParams({per_page, total}: { per_page: any; total: any }): void {
    this.pageSize = per_page;
    this.pageSizeOptions = [per_page];
    this.length = total;
  }

  onChangePage(pageData: PageEvent): void {
    this.paginatonService.setCurrentPage(pageData.pageIndex + 1);
    }

    onFocus() {
      console.log('1');
    }
    applyFilter(filterValue: string) {
      this.toSearchFor = filterValue ? filterValue.trim().toLowerCase() : null;
      this.searchCounter ++;
    }
  }

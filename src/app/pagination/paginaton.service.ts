import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PageInfo } from './interfaces/paginator.model';
import { BaseComponent } from 'src/app/base.component';
import { takeUntil, share, mergeMap } from 'rxjs/operators';
import { GET_USERS } from '../constants-apis';
import { Cache } from "src/app/cache.service";

@Injectable({ providedIn: 'root' })
export class PaginatonService extends BaseComponent {

  constructor(private http: HttpClient, private cache: Cache) { super(); }

  private readonly _currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);

  private readonly _getCurrentPageParams = new Observable<PageInfo>(
    subscriber => {
        try {
          if (!this.findRecord()) {
            this._pageInfoRequest().subscribe( pageInfo => {
              this.cache.setState(pageInfo);
              subscriber.next(pageInfo);
              subscriber.complete();
            });
          } else {
            subscriber.next(this.findRecord());
            subscriber.complete();
          }
        } catch (error) {
          subscriber.error(error);
        }
    }).pipe(share(), takeUntil(this.destroy$));

  private readonly _pageInfoRequest = (): Observable<PageInfo> => this.http.get<PageInfo>(GET_USERS + this._currentPage);

  private get _currentPageObservable(): Observable<number> {
    return this._currentPage$.asObservable();
  }

  private get _currentPage(): number {
    return this._currentPage$.getValue();
  }

  private findRecord(): PageInfo | undefined {
    return this.cache.getStateSnapshot().find(pageRecord => pageRecord.page === this._currentPage);
  }

  public get pageUpdates(): Observable<PageInfo> {
    return this._currentPageObservable.pipe(
      mergeMap(newPage => this._getCurrentPageParams),
      takeUntil(this.destroy$)
    );
  }

  public get getPages(): Observable<PageInfo> {
    return this._currentPageObservable.pipe(
      mergeMap(newPage => this._getCurrentPageParams),
      takeUntil(this.destroy$)
    );
  }

  public setCurrentPage(page: number): void {
    this._currentPage$.next(page);
  }
}

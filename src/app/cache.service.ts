import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageInfo} from "./pagination/interfaces/paginator.model";

@Injectable({providedIn: 'root'})
export class Cache {

  private _state$: BehaviorSubject<PageInfo[]> = new BehaviorSubject([]);

  public getStateSnapshot(): PageInfo[] {
    return this._state$.getValue();
  }

  public getState(): Observable<PageInfo[]> {
    return this._state$.asObservable();
  }

  public setState(newChunk: PageInfo): void {
    const current = this.getStateSnapshot();
    this._state$.next([...current, newChunk]);
  }
}

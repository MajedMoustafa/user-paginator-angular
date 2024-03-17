import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { SingleUser, UserData } from '../pagination/interfaces/paginator.model';
import { HttpClient } from '@angular/common/http';
import { Cache } from "src/app/cache.service";
import { map } from 'rxjs/operators';
import { GET_SINGLE_USER } from '../constants-apis';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient, private cache: Cache) {}

  public getSingleUser(id: number): Observable<UserData> {
    return new Observable(
      subscriber => {
        try {
          if (this.findSingeUserById(id)) {
            subscriber.next(this.findSingeUserById(id));
          } else {
            this.http.get<SingleUser>(GET_SINGLE_USER + id)
              .pipe(map(next => next.data))
              .subscribe(user => subscriber.next(user));
          }
        } catch (error) {
          subscriber.error(error);
        }
      }
    );
}

  public findSingeUserById(id: number): UserData | undefined {
    return this.cache.getStateSnapshot()
      .flatMap( pages => pages.data)
      .find(userData => userData.id === id);
  }
}

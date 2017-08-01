import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { userMapper, UserJson } from '../mappers/user.mapper';

@Injectable()
export class UserService {
  constructor(
    private http: Http
  ) { }

  getUser(userName: string): Observable<User> {
    return this.http.get(`http://lichess.org/api/user/${userName}`)
      .map((res: Response) => {
        return userMapper(res.json() as UserJson);
      });
  }
}

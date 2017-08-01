import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { UserGamesJson, userGamesMapper } from '../mappers/user-games.mapper';
import { Game } from '../models/game.model';

@Injectable()
export class UserGamesService {
  constructor(
    private http: Http
  ) { }

  getUserGames(userName: string): Observable<Game[]> {
    return this.http.get(`http://lichess.org/api/user/${userName}/games?with_moves=1`)
      .map((res: Response) => {
        return userGamesMapper(res.json() as UserGamesJson);
      });
  }
}

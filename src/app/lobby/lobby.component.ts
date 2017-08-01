import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserGamesService } from './services/user-games.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Rx';
import { Game } from './models/game.model';

@Component({
    selector: 'jazz-chess-lobby',
    templateUrl: 'lobby.component.html',
    styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

    public user: Observable<User>;
    public userGames: Observable<Game[]>;

    constructor(private userService: UserService, private userGamesService: UserGamesService) {

    }

    public ngOnInit(): void {
    }

    public fetchUser(userName: string): void {
        this.user = this.userService.getUser(userName);
    }

    public fetchUserGames(userName: string): void {
        this.userGames = this.userGamesService.getUserGames(userName);
    }

}

import { Game } from 'app/lobby/models/game.model';
import { GameJson, gameMapper } from './game.mapper';

export class UserGamesJson {
    currentPage: number;
    previousPage: number;
    nextPage: number;
    maxPerPage: number;
    ngPages: number;
    nbResults: number;
    currentPageResults: GameJson[];
}

export function userGamesMapper(json: UserGamesJson): Game[] {
    const games: Game[] = [];

    for (const game of json.currentPageResults) {
        games.push(gameMapper(game));
    }

    return games;
}

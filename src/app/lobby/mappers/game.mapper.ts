import { Game } from 'app/lobby/models/game.model';

export class GameJson {
    id: string;
    variant: string;
    speed: string;
    perf: string;
    rated: boolean;
    status: string;
    clock: {
        initial: number;
        increment: number;
        totalTime: number;
    }
    createdAt: number;
    lastMovedAt: number;
    turns: number;
    color: string;
    url: string;
    winner: string;
    players: {
        white: PlayerJson;
        black: PlayerJson;
    }
    analysis?: AnalysisJson[];
    moves?: string;
    opening?: {
        code: string;
        name: string;
    }
}

class PlayerJson {
    userId: string;
    name: string;
    rating: number;
    analysis: {
        blunder: number;
        inaccuracy: number;
        mistake: number;
    }
    moveCentis: number[];
}

class AnalysisJson {
    eval: number;
    move: string;
    variation?: string;
}

export function gameMapper(json: GameJson): Game {
    const game: Game = new Game();

    game.id = json.id;
    game.variant = json.variant;
    game.speed = json.speed;
    game.rated = json.rated;
    game.gameFinished = false;

    const finishedGamesStatus = ['mate', 'aborted', 'resign', 'stalemate', 'timeout', 'draw', 'outoftime', 'cheat'];
    if (json.status in finishedGamesStatus) {
        game.gameFinished = true;
    }

    game.color = json.color;
    game.url = json.url;
    game.winner = json.winner;
    game.moves = json.moves;

    return game;
}

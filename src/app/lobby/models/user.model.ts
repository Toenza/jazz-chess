export class User {
    public id: string;
    public userName: string;
    public title: string;
    public url: string;
    public online: boolean;
    public playing?: string;
    public engine: boolean;
    public language: string;
    public profile?: Profile;
    public perfs: Performances;
    public createdAt: number;
    public seenAt: number;
    public playTime: PlayTime;
    public nbFollowing: number;
    public nbFollowers: number;
    public count: Stats;
}

export class Profile {
    public bio: string;
    public country: string;
    public firstName: string;
    public lastName: string;
    public location: string;
}

export class Performances {
    public atomic?: Performance;
    public blitz?: Performance;
    public bullet?: Performance;
    public classical?: Performance;
    public correspondence?: Performance;
}

export class Performance {
    public games: number;
    public rating: number;
    public ratingDeviation: number;
    public progression: number;
    public provisory: boolean;

    constructor(_games: number, _rating: number, _rd: number,
        _prog: number, _prov?: boolean) {
            this.games = _games;
            this.rating = _rating;
            this.ratingDeviation = _rd;
            this.progression = _prog;
            this.provisory = _prov ? _prov : false;
    }
}

export class PlayTime {
    public total: number;
    public tv: number;
}

export class Stats {
    public all: number;
    public rated: number;
    public ai: number;
    public draw: number;
    public drawH: number;
    public loss: number;
    public lossH: number;
    public win: number;
    public winH: number;
    public bookmark: number;
    public playing: number;
    public import: number;
    public me: number;
}

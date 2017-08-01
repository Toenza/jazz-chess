import { User, Performance, Performances } from '../models/user.model';

export class UserJson {
    id: string;
    username: string;
    online: boolean;
    playing?: boolean;
    title?: string;
    url?: string;
    perfs: {
        atomic: PerformanceJson;
        blitz: PerformanceJson;
        bullet: PerformanceJson;
        correspondence: PerformanceJson;
        puzzle: PerformanceJson;
        classical: PerformanceJson;
        ultrabullet: PerformanceJson;
    }
    createdAt: number;
    seenAt: number;
    playTime: {
        total: number;
        tv: number;
    }
    language: string;
    nbFollowing: number;
    nbFollowers: number;
    count: {
        all: number;
        rated: number;
        ai: number;
        draw: number;
        drawH: number;
        loss: number;
        lossH: number;
        win: number;
        winH: number;
        bookmark: number;
        playing: number;
        me: number;
    }
}

class PerformanceJson {
    games: number;
    rating: number;
    rd: number;
    prog: number;
    prov?: boolean;
}

export function userMapper(userJson: UserJson): User {
    let user: User = new User();

    user.id = userJson.id;
    user.userName = userJson.username;
    user.title = assign(userJson.title);
    user.url = assign(userJson.url);

    user.perfs = new Performances();

    if (userJson.perfs.atomic) {
        const perfAtomic: PerformanceJson = userJson.perfs.atomic;
        user.perfs.atomic = new Performance(
            perfAtomic.games,
            perfAtomic.rating,
            perfAtomic.rd,
            perfAtomic.prog,
            perfAtomic.prov ? perfAtomic.prov : false
        );
    }

    if (userJson.perfs.blitz) {
        const perfBlitz: PerformanceJson = userJson.perfs.blitz;
        user.perfs.blitz = new Performance(
            perfBlitz.games,
            perfBlitz.rating,
            perfBlitz.rd,
            perfBlitz.prog,
            perfBlitz.prov ? perfBlitz.prov : false
        );
    }

    if (userJson.perfs.bullet) {
        const perfBullet: PerformanceJson = userJson.perfs.bullet;
        user.perfs.bullet = new Performance(
            perfBullet.games,
            perfBullet.rating,
            perfBullet.rd,
            perfBullet.prog,
            perfBullet.prov ? perfBullet.prov : false
        );
    }

    if (userJson.perfs.correspondence) {
        const perfCorrespondence: PerformanceJson = userJson.perfs.correspondence;
        user.perfs.correspondence = new Performance(
            perfCorrespondence.games,
            perfCorrespondence.rating,
            perfCorrespondence.rd,
            perfCorrespondence.prog,
            perfCorrespondence.prov ? perfCorrespondence.prov : false
        );
    }

    if (userJson.perfs.classical) {
        const perfClassical: PerformanceJson = userJson.perfs.classical;
        user.perfs.classical = new Performance(
            perfClassical.games,
            perfClassical.rating,
            perfClassical.rd,
            perfClassical.prog,
            perfClassical.prov ? perfClassical.prov : false
        );
    }

    return user;
}

function assign(val: any): any {
    return val ? val : undefined;
}


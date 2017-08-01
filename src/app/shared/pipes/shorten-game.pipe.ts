import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortenGame'
})
export class ShortenGamePipe implements PipeTransform {

    private standardShortGameLength = 10;

        transform(value: string, length?: number) {
            const _length: number = length ? length : this.standardShortGameLength;
            if (value.length > _length) {
                return (value.substring(0, _length) + ' ...');
            }
            return value;
        }
}

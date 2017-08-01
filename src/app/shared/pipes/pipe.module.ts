import { NgModule } from '@angular/core';
import { ShortenGamePipe } from './shorten-game.pipe';

@NgModule({
  declarations: [
      ShortenGamePipe
  ],
  exports: [
    ShortenGamePipe
  ]
})
export class PipeModule { }

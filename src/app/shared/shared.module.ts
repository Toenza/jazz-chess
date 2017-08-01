import { NgModule } from '@angular/core';
import { PipeModule } from './pipes/pipe.module';

@NgModule({
  imports: [
      PipeModule
  ],
  declarations: [
  ],
  exports: [
      PipeModule
  ]
})
export class SharedModule { }

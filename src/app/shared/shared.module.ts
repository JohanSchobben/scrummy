import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElipsisPipe } from './elipsis.pipe';



@NgModule({
  declarations: [ElipsisPipe],
  imports: [
    CommonModule
  ],
  exports: [ElipsisPipe]
})
export class SharedModule { }

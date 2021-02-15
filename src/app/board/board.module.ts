import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ItemModule} from '../item/item.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ItemModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }

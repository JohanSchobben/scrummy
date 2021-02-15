import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ItemCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ItemCardComponent]
})
export class ItemModule { }

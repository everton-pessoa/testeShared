import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [ItemComponent],
  exports: [ItemComponent]
})
export class ItemModule { }

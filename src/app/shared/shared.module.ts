import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SliderComponent } from './components/form-controls/slider/slider.component';
import { ICurrencyPipe } from './pipes/i-currency.pipe';
import { DropdownComponent } from './components/form-controls/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    SharedComponent,
    SliderComponent,
    ICurrencyPipe,
    DropdownComponent,
    CardComponent,
  ],
  exports: [SliderComponent, ICurrencyPipe, DropdownComponent, CardComponent],
})
export class SharedModule {}

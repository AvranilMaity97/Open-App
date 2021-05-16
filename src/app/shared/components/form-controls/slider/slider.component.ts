import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SliderComponent,
    },
  ],
})
export class SliderComponent
  implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges
{
  @Input() min: string = '0';
  @Input() max: string = '100';

  value: number;
  propagateChange = (_: any) => {};

  writeValue(selectedValue: number): void {
    if (selectedValue != null) this.value = selectedValue;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  ngOnChanges() {
    this.value = Math.floor((+this.min + +this.max) / 2);
  }

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const inputElements = document.querySelectorAll('[type="range"]');

    const handleInput = (inputElement) => {
      let isChanging = false;

      const setCSSProperty = () => {
        const percent =
          ((inputElement.value - inputElement.min) /
            (inputElement.max - inputElement.min)) *
          100;
        inputElement.style.setProperty(
          '--webkitProgressPercent',
          `${percent}%`
        );
      };

      const handleMove = () => {
        if (!isChanging) return;
        setCSSProperty();
      };
      const handleUpAndLeave = () => (isChanging = false);
      const handleDown = () => (isChanging = true);

      inputElement.addEventListener('mousemove', handleMove);
      inputElement.addEventListener('mousedown', handleDown);
      inputElement.addEventListener('mouseup', handleUpAndLeave);
      inputElement.addEventListener('mouseleave', handleUpAndLeave);
      inputElement.addEventListener('click', setCSSProperty);

      // Init input
      setCSSProperty();
    };

    inputElements.forEach(handleInput);
  }
  setValue(val) {
    this.value = val;
    this.propagateChange(this.value);
  }
}

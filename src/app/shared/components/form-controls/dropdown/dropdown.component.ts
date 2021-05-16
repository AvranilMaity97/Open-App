import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownComponent,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @ViewChild('optionsRef') optionsRef: ElementRef;
  @ViewChild('dropdownRef') dropdownRef: ElementRef;

  @Input() options: string[];
  @Input() placeholder: string;

  value: string = '';
  toggle: boolean = false;

  propagateChange = (_: any) => {};

  constructor(private renderer: Renderer2) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target) {
    const clickedInside = this.dropdownRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.toggle = false;
      this.propagateChange(this.value);
    }
  }

  writeValue(selectedValue: string): void {
    if (selectedValue != null) this.value = selectedValue;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}

  ngOnInit() {}

  toggleDropdown() {
    if (this.toggle) {
      this.renderer.setStyle(this.optionsRef.nativeElement, 'height', '0px');
    }
    this.toggle = !this.toggle;
  }
  setValue(option: string) {
    this.value = option;
    this.propagateChange(this.value);
    this.toggleDropdown();
  }
}

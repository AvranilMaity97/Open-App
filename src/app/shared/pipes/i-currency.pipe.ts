import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee',
})
export class ICurrencyPipe implements PipeTransform {
  transform(value: string): any {
    value = value + '';
    let str = ',' + value.substring(value.length - 3, value.length);
    value = value.substring(0, value.length - 3);
    while (value.length >= 1) {
      if (value.length == 1) {
        str = value + str;
        break;
      }
      str = ',' + value.substring(value.length - 2, value.length) + str;
      value = value.substring(0, value.length - 2);
    }
    if (str.charAt(0) == ',') str = str.substring(1);

    return '₹ ' + str;
  }
}

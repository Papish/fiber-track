import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDecimal'
})
export class ToDecimalPipe implements PipeTransform {
  transform(value: string): number {
    return parseFloat(value);
  }
}
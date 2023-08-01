import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(value: string): string {
    const exchangeRate = 82.26;
    const amount = parseFloat(value.replace('$', ''));
    const convertedAmount = amount * exchangeRate;
    return `₹${convertedAmount.toFixed()}`;
  }

}
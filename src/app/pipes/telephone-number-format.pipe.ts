import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneNumberFormat'
})
export class TelephoneNumberFormatPipe implements PipeTransform {

  transform(number: string): string {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ')', match[3], '-', match[4]].join('');
    }
    return number;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createSlug'
})
export class CreateSlugPipe implements PipeTransform {

  transform(value: string,): string {
    if (value) {
      return value.replace(/\s+/g, '-').toLowerCase();
    }
    else return '';
  }

}

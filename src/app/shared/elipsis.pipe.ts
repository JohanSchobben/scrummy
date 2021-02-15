import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {

  transform(value: string, length: number = 75): string {
    if (value.length <= length) { return value; }
    return value.substring(0, length - 3) + '...';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaced',
})
export class SpacedPipe implements PipeTransform {
  transform(value: string): any {
    return value.split('').join(' ');
  }
}

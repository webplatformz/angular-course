import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaced',
})
export class SpacedPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {}
}

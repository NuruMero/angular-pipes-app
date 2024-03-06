import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true
})
export class CanFlyPipe implements PipeTransform {
  transform(value: any): any {
    return ( value )
      ? 'vuela'
      : 'no vuela';
  }
}

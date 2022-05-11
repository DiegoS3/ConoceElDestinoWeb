import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'm2h'
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    if (minutes === 0) {
      return hours + ' hrs ';
    }
    return hours + ' hrs ' + minutes + ' mins';
  }
}

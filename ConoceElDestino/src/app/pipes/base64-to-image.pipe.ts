import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'base64toimg'
})
export class Base64ToImage implements PipeTransform {

  transform(value: string): string {
    return `data:image/png;base64,${value}`;
  }
}

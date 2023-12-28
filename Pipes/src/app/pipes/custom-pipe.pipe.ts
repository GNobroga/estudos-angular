import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, maxLength: number): unknown {
    return value?.substring(0, maxLength);
  }

}

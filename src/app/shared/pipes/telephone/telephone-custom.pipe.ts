import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneCustom'
})
export class TelephoneCustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args.length > 1 ) {
      if (args[1]) {
        return '(' + args[0] + ') ' + value.split('-').join('.');
      } else {
        return args[0] + ' ' + value;
      }
    }
    return value;
  }

}

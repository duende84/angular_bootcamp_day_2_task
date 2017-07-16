import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = value.split(' ')[0];
    let aux = res.split('/');
    return aux.length > 1 ? aux[1] : res;
  }

}

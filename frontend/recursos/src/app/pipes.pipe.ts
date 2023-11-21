import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(items: any[], searchTerm:string): any[] {
    if(!items) return [];
    if(!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter( it => {
      return it.nombres.toLowerCase().includes(searchTerm) ||
      it.primerApellido.toLowerCase().includes(searchTerm) ||
      it.segundoApellido.toLowerCase().includes(searchTerm) ||
      it.curp.toLowerCase().includes(searchTerm);
    });
  }

}

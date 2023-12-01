import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesEscolares'
})
export class DatosEscolaresPipe implements PipeTransform {

  transform(items: any[], searchTerm: string){
    if(!items) return [];
    if(!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();
    return items.filter( it => {
      return it.correoEscolar.toLowerCase().includes(searchTerm) ||
      it.carrera.toLowerCase().includes(searchTerm) ||
      it.matriculaEscolar.toLowerCase().includes(searchTerm)
    });
  }

}

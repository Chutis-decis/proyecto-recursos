import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeIngreso'
})
export class DatosIngresoPipe implements PipeTransform {

  transform(items: any[], searchTerm:string){
    if(!items) return [];
    if(!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter( it => {
      return it.turno.toLowerCase().includes(searchTerm) 
      || it.horario.toLowerCase().includes(searchTerm)
      || it.tramite.nombreTramite.toLowerCase().includes(searchTerm)
      || it.modalidad.nombre.toLowerCase().includes(searchTerm)
      || it.perfilamiento.nombrePerfilamiento.toLowerCase().includes(searchTerm)
    });
  }

}

import { modalidadEscolar } from "./ModalidadEscolar";
import { planEducativo } from "./planEducativo";
import { Universidad } from "./Universidad"

export class Escolares{
    id: number;
    correoEscolar: string;
    carrera: string;
    universidad: Universidad = new Universidad();
    matriculaEscolar: string;
    modalidadEscolar: modalidadEscolar = new modalidadEscolar();
    planesEducativos: planEducativo = new planEducativo();
    periodo: string;
    datosPersonales: number;
}
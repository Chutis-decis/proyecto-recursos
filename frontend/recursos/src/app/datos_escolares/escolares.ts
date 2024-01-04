import { modalidadEscolar } from "./ModalidadEscolar";
import { Periodo } from "./Periodo";
import { planEducativo } from "./planEducativo";
import { Universidad } from "./universidad";

export class DatosEscolares{
    id: number;
    correoEscolar: string;
    carrera: string;
    universidad: Universidad = new Universidad();
    matriculaEscolar: string;
    modalidadEscolar: modalidadEscolar = new modalidadEscolar();
    planesEducativos: planEducativo = new planEducativo();
    periodo: Periodo = new Periodo();
    activo: boolean;
    datosPersonales: number;
}

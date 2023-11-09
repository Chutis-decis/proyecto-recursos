import { modalidadEscolar } from "./ModalidadEscolar";
import { planEducativo } from "./planEducativo";
import { universidad } from "./universidad";

export class Escolares{
    id: number;
    correoEscolar: string;
    carrera: string;
    universidad: universidad = new universidad();
    matriculaEscolar: string;
    modalidadEscolar: modalidadEscolar = new modalidadEscolar();
    planesEducativos: planEducativo = new planEducativo();
    periodo: string;
    datosPersonales: number;
}
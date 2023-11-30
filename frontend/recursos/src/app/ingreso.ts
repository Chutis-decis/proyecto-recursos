import { Modalidad } from "./modalidad";
import { Perfilamiento } from "./perfilamiento";
import { Tramite } from "./tramite";

export class DatosIngreso{
    id: number;
    tramite: Tramite = new Tramite();
    perfilamiento: Perfilamiento = new Perfilamiento();
    turno: string;
    horario: string;
    modalidad: Modalidad = new Modalidad();
    cv: string;
    activo: boolean;
    historialAcademico: string;
}
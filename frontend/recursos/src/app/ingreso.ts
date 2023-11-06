import { Modalidad } from "./modalidad";
import { Perfilamiento } from "./perfilamiento";
import { Tramite } from "./tramite";

export class Ingreso{
    id: number;
    tramite: Tramite;
    perfilamiento: Perfilamiento;
    turno: string;
    horario: string;
    modalidad: Modalidad;
    cv: string;
    historialAcademico: string;
    datosPersonales: number;
}
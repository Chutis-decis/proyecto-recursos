import { CPanel } from "../components/admin/CPanel";
import { Beca } from "./Beca";
import { Curso } from "./Curso";
import { Grupo } from "./Grupo";
import { Tutor } from "./Tutor";

export class DatosFTD{
    id: number;
    nombreProyecto: string;
    avanceProyecto: string;
    evaluacionProyecto: string;
    areaInfotec: string;
    tutor: Tutor = new Tutor();
    beca: Beca = new Beca();
    fechaIngreso: string;
    fechaTermino: string;
    grupo: Grupo = new Grupo();
    enlace: string;
    matriculaFTD: string;
    correoBecario: string;
    estatusTramite: string;
    cursos: Curso = new Curso();
    activo: boolean;
}
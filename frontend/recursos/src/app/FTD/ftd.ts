import { CPanel } from "../components/admin/CPanel";
import { Beca } from "./Beca";
import { Grupo } from "./Grupo";
import { Tutor } from "./Tutor";

export class ftd{
    id: number;
    nombreProyecto: string;
    avanceProyecto: string;
    evaluacionProyecto: string;
    areaInfotec: string;
    tutor: Tutor = new Tutor();
    beca: Beca = new Beca();
    fechaIngreso: Date;
    fechaTermino: Date;
    grupo: Grupo = new Grupo();
    enlace: string;
    matriculaFTD: string;
    correoBecario: string;
    estatusTramite: string;
    cursos: string;
    activo: boolean;
    datosPersonales: CPanel = new CPanel();
}
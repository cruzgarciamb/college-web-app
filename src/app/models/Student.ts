import { Generic } from "./generic";

export class Student implements Generic{
    id?: number = 0;
    nombre?: string = "";
    apellido?: string;
    createAt?: string;
    fotoHashCode?: number;
}

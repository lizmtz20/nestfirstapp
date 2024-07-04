export enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

 export class Task{
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
} 
//una entidad se puede usar para generar las tablas o para generar esquemas
//orm leen estas clases y convertir
//Dto significa que son datos transfiriendose de cliente al servidor 


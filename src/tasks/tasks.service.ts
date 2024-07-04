//LOS SERVICIOS SIRVEN PARA QUE SE PUEDAN CREAR METODOS QUE VAMOS A REUTILIZAR
import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity';
import {v4} from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService{


    private tasks: Task[]= [
        {
            id:'1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING,
        },
    ];

    getAllTasks(){
        return this.tasks;
    }
    createTask(title:string, description:string){
        const task = {
            id: v4(), //DATO ALEATORIO
            title, 
            description, 
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }
    
    deleteTask(id:string){
        this.tasks = this.tasks.filter(task => task.id !== id)//NOS DEVUELVE UN ARRAY EN ESA TAREA
    }

    getTaskById(id:string):Task{
        return this.tasks.find(task => task.id == id)
    }

    updateTask(id:string, updatedFields:UpdateTaskDto):Task{
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updatedFields);//ACTUALIZA
        this.tasks = this.tasks.map((task) => (task.id === id ? newTask:task));//Esto da un nuevo arreglo ya que actualiza
        return newTask;
    }
}

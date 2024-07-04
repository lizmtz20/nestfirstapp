import { Body, Controller, Get, Post, Delete, Param, Put, Patch} from '@nestjs/common';
import{TasksService} from './tasks.service'
import {CreateTaskDTo, UpdateTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    //CREA UNA PROPIEDAD DENTRO DE UNA CLASE
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }
    //CREAR METODOS QUE USEN EL SERVICIO
    @Post()
    //EL RECUEST BODY ES UNA FORMA EN LA QUE EL CLIENTE NOS PUEDE ENVIAR UN DATO EN JSON O TEXTO, BODY NOS ENVIA UN JSON CON MULTIPLES VALORES
    createTask(@Body() newTask: CreateTaskDTo){ //DENTRO DEL PARENTESIS SE IMPORTAN LOS DATOS QUE EL CLIENTE ENVIE 
       return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id')id:string){
        this.tasksService.deleteTask(id)
    }

    @Patch(":id")//ACTUALIZAR TODO EL OBJETO
    //@PATCH significa que quieres actualizar algo no todo
    updateTask(@Param("id") id:string, @Body() updatedFields:UpdateTaskDto){
        return this.tasksService.updateTask(id, updatedFields)
    }
}

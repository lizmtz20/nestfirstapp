import { TaskStatus } from "../task.entity";
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'

export class CreateTaskDTo{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

//EL ? SIGNIFICA QUE PUEDE SER OPCIONAL
export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;
 
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE])
    status?: TaskStatus;
}
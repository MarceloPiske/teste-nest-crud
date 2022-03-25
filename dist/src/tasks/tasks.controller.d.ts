import { CreateUser } from './schemas/person.schema';
export declare class TasksController {
    model: any;
    create(body: CreateUser): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
    update(id: number): any;
    delete(id: number): Promise<any>;
}

import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppDataSource } from 'src/database.providers';
import { PersonModel } from './models/person.model';
import { CreateUser } from './schemas/person.schema';

@Controller('tasks')
export class TasksController {
  model: any;
  /* constructor(
    ) {} */
  @Post()
  public create(@Body() body: CreateUser): any {
    console.log(body);
    AppDataSource.initialize()
      .then(async () => {
        const user = new PersonModel();
        user.name = 'Marcelo';
        user.age = 20;
        user.altura = 1.75;
        user.cidade = 'Cariacica';
        await AppDataSource.manager.save(user);
        console.log('Saved a new user with id: ' + user.id);
      })
      .catch((error) => console.log(error));
    return { data: 'Entrei no Create' };
  }

  @Get(':id')
  public async getOne(): Promise<{ data: PersonModel }> {
    const list = await this.model.find();
    return list;
  }

  @Get()
  public async getAll(): Promise<{ data: PersonModel }> {
    const list = await this.model.find();
    //console.log("Loading users from the database...")
    //const users = await AppDataSource.manager.find(User);
    //console.log("Loaded users: ", users);
    return list;
  }

  @Put(':id')
  public update(): any {
    return { data: 'Entrei no update' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Entrei no delete' };
  }
}

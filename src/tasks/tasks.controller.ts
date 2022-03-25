import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppDataSource } from 'src/database.providers';
import { PersonModel } from './models/person.model';
import { CreateUser } from './schemas/person.schema';

@Controller('tasks')
export class TasksController {
  model: any;
  /* constructor(
    ) {} */
  @Post()
  public async create(@Body() body: CreateUser): Promise<any> {
    const nome = body['nome'];
    const idade = body['idade'];
    const altura = body['altura'];
    const cidade = body['cidade'];

    console.log(body);

    const user = new PersonModel();
    user.name = nome;
    user.age = idade;
    user.altura = altura;
    user.cidade = cidade;
    await AppDataSource.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);
    return { data: 'Entrei no Create' };
  }

  @Get(':id')
  public async getOne(@Param('id') id: number): Promise<any> {
    const peronRepository = AppDataSource.getRepository(PersonModel)
    const user = await peronRepository.findOneBy({
        id: id,
    })
    return user;
  }

  @Get()
  public async getAll(): Promise<any> {
    const users = await AppDataSource.manager.find(PersonModel);
    console.log("Loaded users: ", users);
    return users;
  }

  @Put(':id')
  public update(@Param('id') id: number): any {
    return { data: 'Entrei no update' };
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<any> {
    const photoRepository = AppDataSource.getRepository(PersonModel)
    const photoToRemove = await photoRepository.findOneBy({
        id: id,
    })
    await photoRepository.remove(photoToRemove)
    return { data: 'Entrei no delete' };
  }
}

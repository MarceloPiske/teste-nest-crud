import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/init')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public create(): any {
    return { data: 'Entrei no Create' };
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

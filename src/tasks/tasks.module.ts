import { Module } from '@nestjs/common';
import { PersonModel } from './models/person.model';
import { TaskService } from './task.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [PersonModel],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}

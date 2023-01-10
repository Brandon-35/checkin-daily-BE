import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

  create(createTaskDto: CreateTaskDto) {
    return new this.taskModel(createTaskDto).save();
  }

  async findAll() {
    return this.taskModel.find();
  }

  findOne(id: number) {
    return this.taskModel.findOne({ _id : id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

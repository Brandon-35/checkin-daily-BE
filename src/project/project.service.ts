import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {

  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) { }


  create(createProjectDto: CreateProjectDto) {
    return new this.projectModel(createProjectDto).save();
  }

  async findAll() {
    return this.projectModel.find();
  }

  findOne(id: number) {
    return this.projectModel.findOne({ _id : id });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}

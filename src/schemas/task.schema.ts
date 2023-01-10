import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  projectName: string;

  @Prop()
  timeStart: number;

  @Prop()
  timeEnd: string;

  @Prop()
  describe: string;

  @Prop()
  task: string;

  @Prop()
  date: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
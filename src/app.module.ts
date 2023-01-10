import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule,MongooseModule.forRoot('mongodb://localhost/nest'), ProjectModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

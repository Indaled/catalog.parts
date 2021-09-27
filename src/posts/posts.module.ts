import {Module} from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "./posts.model";
import {FilesService} from "../files/files.service";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[
    SequelizeModule.forFeature([User, Post]),
    FilesService,
  ]
})
export class PostsModule {}

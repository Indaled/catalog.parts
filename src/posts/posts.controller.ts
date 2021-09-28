import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Body, Post, Controller, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Post as PastItem} from "./posts.model";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Создание поста'})
    @ApiResponse({status: 200, type: PastItem})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto:CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }
}
